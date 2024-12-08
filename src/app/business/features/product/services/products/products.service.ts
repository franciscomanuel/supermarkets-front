import { Injectable } from "@angular/core";
import { HttpService } from "../../../../../core/services/http/http.service";
import { HttpFilterParameters, HttpRequestParameters, Pageable } from "../../../../../core/interfaces";
import { Product } from "../../interfaces";
import { map, Observable } from "rxjs";
import { HttpHeaderParameters } from "../../../../../core/interfaces/http-header-parameters.interface";
import { mapToPageable } from "../../../../../core/utils/http-functions.utils";

@Injectable({
  providedIn: "root"
})
export class ProductsService extends HttpService<Product, Pageable<Product>> {
  endpoint(): string {
    return "products";
  }

  getAll(
    params?: HttpRequestParameters,
    filter?: HttpFilterParameters,
    headers?: HttpHeaderParameters
  ): Observable<Pageable<Product>> {
    return this.get(params, filter, headers).pipe(map(mapToPageable<Product>));
  }
}
