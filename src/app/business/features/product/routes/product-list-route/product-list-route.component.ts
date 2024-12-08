import { AfterViewInit, Component, HostBinding, inject, OnDestroy, OnInit, ViewChild } from "@angular/core";
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
import { Subject, takeUntil } from "rxjs";
import { ServerTableComponent } from "../../../../../core/modules/table/main/server-table/server-table.component";
import { DialogService } from "../../../../../core/services/dialog/dialog.service";
import { ProductFormModalComponent } from "../../components/product-form-modal/product-form-modal.component";

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
  private readonly unsubscribeSubject$ = new Subject<void>();

  readonly rowsPerPage = ROWS_PER_PAGE;

  requestParams: HttpRequestParameters = {
    ...INITIAL_REQUEST_PARAMS,
    sortBy: "name,asc"
  };
  requestFilters: HttpFilterParameters = {};
  datasource: MatTableDataSource<Product> = new MatTableDataSource();
  filterForm!: FormGroup;

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
    const name = this.filterForm.get("name")?.value;

    this.requestFilters = !!name ? { name } : {};

    this.getProducts();
  }

  onAdd(): void {
    this.dialogService
      .openDialog(ProductFormModalComponent)
      .pipe(takeUntil(this.unsubscribeSubject$))
      .subscribe((product: Product) => {
        console.log("product: ", product);
      });
  }

  onEdit(): void {}

  onDelete(): void {}

  onPageChange(value: unknown): void {
    console.log("onPageChange value: ", value);
  }

  onSortChange(sort: Sort): void {
    this.requestParams = {
      ...this.requestParams,
      sortBy: `${sort.active},${sort.direction}`
    };
    this.getProducts();
  }

  private getProducts(): void {
    this.productService.getAll(this.requestParams, this.requestFilters).subscribe((pageable: Pageable<Product>) => {
      const { content } = pageable;

      this.datasource.data = content;
    });
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
