import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { AuthService } from './auth/auth.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  baseUrl = 'https://my-todo-rest-api.herokuapp.com/';

  constructor(private http: HttpClient, private auth: AuthService) {
    if (this.auth.isAuthenticated()) {
      httpOptions.headers = httpOptions.headers.set('x-auth-token', this.auth.getTokenFromStore());
    }
  }

  fetch(path: string): Observable<any> {
    return this.http.get(path, httpOptions).pipe(catchError(this.handleError));
  }

  post(path: string, body: object): Observable<any> {
    return this.http.post(path, body, httpOptions).pipe(catchError(this.handleError));
  }

  put(path: string, body: any): Observable<any> {
    return this.http.put(path, body, httpOptions).pipe(catchError(this.handleError));
  }

  delete(path: string): Observable<any> {
    return this.http.delete(path, httpOptions).pipe(catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }
    return throwError('Something bad happened; please try again later.');
  }
}
