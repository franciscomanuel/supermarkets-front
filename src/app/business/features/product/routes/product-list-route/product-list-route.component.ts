import { Component, HostBinding, inject, OnInit } from "@angular/core";
import { ProductsService } from "../../services/products/products.service";
import { HttpRequestParameters, Pageable } from "../../../../../core/interfaces";
import { Product } from "../../interfaces";
import { INITIAL_REQUEST_PARAMS, ROWS_PER_PAGE } from "../../../../../core/constants/table/table.constants";
import { MatTableDataSource } from "@angular/material/table";
import { TableModule } from "../../../../../core/modules/table/table.module";

@Component({
  selector: "horus-product-list-route",
  imports: [TableModule],
  templateUrl: "./product-list-route.component.html",
  styleUrl: "./product-list-route.component.sass"
})
export class ProductListRouteComponent implements OnInit {
  @HostBinding("class") className = "flex-container main-page-content";

  private readonly productService = inject(ProductsService);

  readonly rowsPerPage = ROWS_PER_PAGE;

  requestParams: HttpRequestParameters = {
    ...INITIAL_REQUEST_PARAMS,
    sortBy: "name,asc"
  };
  datasource: MatTableDataSource<Product> = new MatTableDataSource();

  ngOnInit(): void {
    this.getProducts();
  }

  private getProducts(): void {
    this.productService.getAll(this.requestParams).subscribe((pabeable: Pageable<Product>) => {
      const { content } = pabeable;

      this.datasource.data = content;
    });
  }
}
