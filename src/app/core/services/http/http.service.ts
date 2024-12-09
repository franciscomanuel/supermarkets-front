import { HttpClient } from "@angular/common/http";
import { Injectable, Injector } from "@angular/core";
import { Observable } from "rxjs";
import { HttpFilterParameters, HttpRequestParameters } from "../../interfaces";
import { environment } from "../../../../environments/environment";
import { HttpHeaderParameters } from "../../interfaces/http-header-parameters.interface";

@Injectable({
  providedIn: "root"
})
export abstract class HttpService<Request> {
  private readonly httpClient: HttpClient;

  abstract endpoint(): string;

  urlBase = environment.api.url;

  constructor(public injector: Injector) {
    this.httpClient = this.injector.get(HttpClient);
  }

  get<Response>(
    params?: HttpRequestParameters,
    filter?: HttpFilterParameters,
    headers?: HttpHeaderParameters
  ): Observable<Response> {
    return this.httpClient.get<Response>(`${this.urlBase}/${this.endpoint()}`, {
      headers: { ...headers },
      params: { ...params, ...filter }
    });
  }

  post<Response>(payload: Request): Observable<Response> {
    return this.httpClient.post<Response>(`${this.urlBase}/${this.endpoint()}`, payload);
  }

  put<Response>(payload: Request): Observable<Response> {
    return this.httpClient.put<Response>(`${this.urlBase}/${this.endpoint()}`, payload);
  }

  delete<Response>(id: string): Observable<Response> {
    return this.httpClient.delete<Response>(`${this.urlBase}/${this.endpoint()}/${id}`);
  }
}
