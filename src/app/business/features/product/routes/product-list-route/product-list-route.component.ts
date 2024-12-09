import { Component, HostBinding, inject, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { ProductsService } from "../../services/products/products.service";
import { HttpFilterParameters, HttpRequestParameters, Pageable } from "../../../../../core/interfaces";
import { Product } from "../../interfaces";
import { INITIAL_REQUEST_PARAMS, ROWS_PER_PAGE } from "../../../../../core/constants/table/table.constants";
import { MatTableDataSource } from "@angular/material/table";
import { TableModule } from "../../../../../core/modules/table/table.module";
import { TranslateModule } from "@ngx-translate/core";
import { ButtonModule } from "../../../../../core/modules/button/button.module";
import { AccordionModule } from "../../../../../core/modules/accordion/accordion.module";
import { InputModule } from "../../../../../core/modules/input/input.module";
import { FormControl, FormGroup } from "@angular/forms";
import { MatSort, MatSortModule, Sort } from "@angular/material/sort";
import { filter, finalize, Subject, takeUntil } from "rxjs";
import { ServerTableComponent } from "../../../../../core/modules/table/main/server-table/server-table.component";
import { DialogService } from "../../../../../core/services/dialog/dialog.service";
import { ProductFormModalComponent } from "../../components/product-form-modal/product-form-modal.component";
import { LoadingService } from "../../../../../core/services/loading/loading.service";
import { PageChange } from "../../../../../core/modules/table/interfaces";
import { buildHttpRequestParameters } from "../../../../../core/utils/http-request-parameters.utils";
import { MatDialogConfig } from "@angular/material/dialog";

@Component({
  selector: "horus-product-list-route",
  imports: [TableModule, TranslateModule, ButtonModule, AccordionModule, InputModule, MatSortModule],
  templateUrl: "./product-list-route.component.html",
  styleUrl: "./product-list-route.component.sass"
})
export class ProductListRouteComponent implements OnInit, OnDestroy {
  @HostBinding("class") className = "flex-container main-page-content";

  @ViewChild(ServerTableComponent, { static: true })
  table!: ServerTableComponent<Product>;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;

  private readonly productService = inject(ProductsService);
  private readonly dialogService = inject(DialogService<ProductFormModalComponent, Product>);
  private readonly loadingService = inject(LoadingService);
  private readonly unsubscribeSubject$ = new Subject<void>();

  readonly rowsPerPage = ROWS_PER_PAGE;

  requestParams: HttpRequestParameters = {
    ...INITIAL_REQUEST_PARAMS,
    sortBy: "name,asc"
  };
  requestFilters: HttpFilterParameters = {};
  datasource: MatTableDataSource<Product> = new MatTableDataSource();
  filterForm!: FormGroup;
  pageSize!: number;
  totalElements!: number;

  get nameControl(): FormControl<number | string> {
    return this.filterForm.get("name") as FormControl<string>;
  }

  ngOnInit(): void {
    this.createFilterForm();
    this.getProducts();
    this.subscribeSorting();
  }

  ngOnDestroy(): void {
    this.unsubscribeSubject$.next();
    this.unsubscribeSubject$.complete();
  }

  onReset(): void {
    this.filterForm.reset();
    this.onSearch();
  }

  onSearch(): void {
    const name = this.filterForm.get("name")?.value.trim();

    this.requestFilters = !!name ? { name } : {};
    this.requestParams = {
      ...INITIAL_REQUEST_PARAMS,
      sortBy: "name,asc"
    };

    this.table.paginator.pageIndex > 0 ? this.table.firstPage() : this.getProducts();
  }

  onAdd(): void {
    this.dialogService
      .openDialog(ProductFormModalComponent)
      .pipe(filter(Boolean), takeUntil(this.unsubscribeSubject$))
      .subscribe((product: Product) => this.saveProduct(product));
  }

  onEdit(product: Product): void {
    const matDialogConfig: MatDialogConfig = {
      data: product
    };

    this.dialogService
      .openDialog(ProductFormModalComponent, matDialogConfig)
      .pipe(filter(Boolean), takeUntil(this.unsubscribeSubject$))
      .subscribe((productEdited: Product) => this.editProduct(productEdited));
  }

  onDelete(id: string): void {
    this.loadingService.setLoading(true);

    this.productService
      .delete(id)
      .pipe(finalize(() => this.loadingService.setLoading(false)))
      .subscribe(() => this.getProducts());
  }

  onPageChange(pageChange: PageChange): void {
    this.requestParams = buildHttpRequestParameters(this.requestParams, undefined, pageChange);

    this.getProducts();
  }

  onSortChange(sort: Sort): void {
    this.requestParams = buildHttpRequestParameters(this.requestParams, sort);
  }

  private getProducts(): void {
    this.loadingService.setLoading(true);
    this.productService
      .getAll(this.requestParams, this.requestFilters)
      .pipe(finalize(() => this.loadingService.setLoading(false)))
      .subscribe((pageable: Pageable<Product>) => {
        const { content, size, totalElements } = pageable;

        this.datasource.data = content;
        this.pageSize = size;
        this.totalElements = totalElements;
      });
  }

  private saveOrEditProduct(product: Product, action: "save" | "update"): void {
    this.loadingService.setLoading(true);

    const productRequest = action === "save" ? this.productService.save(product) : this.productService.update(product);

    productRequest.subscribe({
      next: () => this.getProducts(),
      error: () => this.loadingService.setLoading(false)
    });
  }

  private saveProduct(product: Product): void {
    this.saveOrEditProduct(product, "save");
  }

  private editProduct(product: Product): void {
    this.saveOrEditProduct(product, "update");
  }

  private createFilterForm(): void {
    this.filterForm = new FormGroup({
      name: new FormControl("", { nonNullable: true })
    });
  }

  private subscribeSorting(): void {
    this.sort?.sortChange.pipe(takeUntil(this.unsubscribeSubject$)).subscribe(() => this.table.firstPage());
  }
}
