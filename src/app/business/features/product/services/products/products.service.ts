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
export class ProductsService extends HttpService<Product> {
  endpoint(): string {
    return "products";
  }

  getAll(
    params?: HttpRequestParameters,
    filter?: HttpFilterParameters,
    headers?: HttpHeaderParameters
  ): Observable<Pageable<Product>> {
    return this.get<Pageable<Product>>(params, filter, headers).pipe(map(mapToPageable<Product>));
  }

  save(product: Product): Observable<Product> {
    return this.post<Product>(product);
  }

  update(product: Product): Observable<Product> {
    return this.put<Product>(product);
  }

  remove(id: string): Observable<void> {
    return this.delete<void>(id);
  }
}
