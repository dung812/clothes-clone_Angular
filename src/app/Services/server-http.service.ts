import { PRODUCT } from './../models/product';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServerHttpService {
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      // Authorization: 'my-auth-token'
    }),
  };

  private REST_API_SERVER = 'https://db-clothes-angular.herokuapp.com';
  constructor(private httpClient: HttpClient) {}

  //=========================== PRODUCT =============================
  // GET LIST
  public getProducts(): Observable<any> {
    const loading = document.querySelector(".image-loader");
    loading?.classList.remove("hidden");
    const url = `${this.REST_API_SERVER}/products`;
    loading?.classList.add("hidden");
    return this.httpClient
      .get<any>(url, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  // GET SINGLE
  public getSingleProduct(studentId: number): Observable<any> {
    const url = `${this.REST_API_SERVER}/products/` + studentId;
    return this.httpClient
      .get<any>(url, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  // POST
  public addProduct(data: PRODUCT) {
    const url = `${this.REST_API_SERVER}/products`;
    return this.httpClient
      .post<any>(url, data, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  // DELETE
  public deleteProduct(productId: number) {
    const url = `${this.REST_API_SERVER}/products/` + productId;
    return this.httpClient.delete<any>(url).pipe(catchError(this.handleError));
  }

  // PUT
  public modifyProduct(productId: number, data: any) {
    const url = `${this.REST_API_SERVER}/products/` + productId;
    return this.httpClient
      .put<any>(url, data, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  //=========================== ORDER =============================
  //GET
  public getOrders() {
    const url = `${this.REST_API_SERVER}/orders`;
    return this.httpClient
      .get<any>(url, this.httpOptions)
      .pipe(catchError(this.handleError));
  }
  // POST
  public addOrder(data: any) {
    const url = `${this.REST_API_SERVER}/orders`;
    return this.httpClient
      .post<any>(url, data, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  // PATCH
  public modifyOrder(orderId: number, data: any) {
    const url = `${this.REST_API_SERVER}/orders/` + orderId;
    return this.httpClient
      .patch<any>(url, data, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  // DELETE
  public deleteOrder(orderId: number) {
    const url = `${this.REST_API_SERVER}/orders/` + orderId;
    return this.httpClient.delete<any>(url).pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `,
        error.error
      );
    }
    // Return an observable with a user-facing error message.
    return throwError(
      () => new Error('Something bad happened; please try again later.')
    );
  }
}
