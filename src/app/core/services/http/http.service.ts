import { HttpClient } from "@angular/common/http";
import { Injectable, Injector } from "@angular/core";
import { Observable } from "rxjs";
import { HttpFilterParameters, HttpRequestParameters } from "../../interfaces";
import { environment } from "../../../../environments/environment";
import { HttpHeaderParameters } from "../../interfaces/http-header-parameters.interface";

@Injectable({
  providedIn: "root"
})
export abstract class HttpService<Request, Response> {
  private httpClient: HttpClient;

  abstract endpoint(): string;

  constructor(public injector: Injector) {
    this.httpClient = this.injector.get(HttpClient);
  }

  get(
    params?: HttpRequestParameters,
    filter?: HttpFilterParameters,
    headers?: HttpHeaderParameters
  ): Observable<Response> {
    const urlBase = environment.api.url;

    return this.httpClient.get<Response>(`${urlBase}/${this.endpoint()}`, {
      headers: { ...headers },
      params: { ...params, ...filter }
    });
  }
}
