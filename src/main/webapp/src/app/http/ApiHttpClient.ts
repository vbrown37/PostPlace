import {HttpClient, HttpContext, HttpHandler, HttpHeaders, HttpParams} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {CONFIG} from "@config/config";
import {Observable} from "rxjs";

@Injectable()
export class ApiHttpClient {

  public baseUrl: string;

  constructor(private http: HttpClient) {
    //TODO
    this.baseUrl = CONFIG.dev.baseUrl;
  }

  request(method: string, url: string, options?: { body?: any; headers?: HttpHeaders | { [p: string]: string | string[] }; context?: HttpContext; params?: HttpParams | { [p: string]: string | number | boolean | ReadonlyArray<string | number | boolean> }; observe?: "body" | "events" | "response"; reportProgress?: boolean; responseType?: "arraybuffer" | "blob" | "json" | "text"; withCredentials?: boolean }): Observable<any> {
    return this.http.request(method, this.baseUrl + url, options);
  }

  get<T>(url: string, options?: { headers?: HttpHeaders | { [p: string]: string | string[] }; context?: HttpContext; observe?: "body"; params?: HttpParams | { [p: string]: string | number | boolean | ReadonlyArray<string | number | boolean> }; reportProgress?: boolean; responseType?: "json"; withCredentials?: boolean }): Observable<T> {
    return this.http.get<T>(this.baseUrl + url, options)
  }

  delete<T>(url: string, options?: { headers?: HttpHeaders | { [p: string]: string | string[] }; context?: HttpContext; observe?: "body"; params?: HttpParams | { [p: string]: string | number | boolean | ReadonlyArray<string | number | boolean> }; reportProgress?: boolean; responseType?: "json"; withCredentials?: boolean; body?: any }): Observable<T> {
    return this.http.delete<T>(this.baseUrl + url, options);
  }

  patch<T>(url: string, body: any, options?: { headers?: HttpHeaders | { [p: string]: string | string[] }; context?: HttpContext; observe?: "body"; params?: HttpParams | { [p: string]: string | number | boolean | ReadonlyArray<string | number | boolean> }; reportProgress?: boolean; responseType?: "json"; withCredentials?: boolean }): Observable<T> {
    return this.http.patch<T>(this.baseUrl + url, body, options);
  }

  post<T>(url: string, body: any, options?: { headers?: HttpHeaders | { [p: string]: string | string[] }; context?: HttpContext; observe?: "body"; params?: HttpParams | { [p: string]: string | number | boolean | ReadonlyArray<string | number | boolean> }; reportProgress?: boolean; responseType?: "json"; withCredentials?: boolean }): Observable<T> {
    return this.http.post<T>(this.baseUrl + url, body, options);
  }

  put<T>(url: string, body: any, options?: { headers?: HttpHeaders | { [p: string]: string | string[] }; context?: HttpContext; observe?: "body"; params?: HttpParams | { [p: string]: string | number | boolean | ReadonlyArray<string | number | boolean> }; reportProgress?: boolean; responseType?: "json"; withCredentials?: boolean }): Observable<T> {
    return this.http.put<T>(this.baseUrl + url, body, options);
  }
}
