import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServerHttpService {

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      // Authorization: 'my-auth-token'
    })
  };

  private REST_API_SERVER = 'https://db-clothes-angular.herokuapp.com'; 
  constructor(private httpClient: HttpClient) { }

  public getProducts(): Observable<any> {
    const url = `${this.REST_API_SERVER}/products`;
    return this.httpClient
              .get<any>(url, this.httpOptions)
              .pipe(catchError(this.handleError));
  }
  
  public getOrders(): Observable<any> {
    const url = `${this.REST_API_SERVER}/orders`;
    return this.httpClient
              .get<any>(url, this.httpOptions)
              .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
  
}
