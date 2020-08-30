import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AuthService } from './auth/auth.service';
import { User } from './user.model';

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
  user: User;

  constructor(private http: HttpClient, private auth: AuthService) {
    if (this.auth.isAuthenticated()) {
      httpOptions.headers = httpOptions.headers.set('x-auth-token', this.auth.getTokenFromStore());
    }
  }

  fetch(path: string): Observable<object> {
    return this.http.get(path, httpOptions);
  }

  post(path: string, body: string): Observable<object> {
    return this.http.post(path, body, httpOptions);
  }

  put(path: string, body: any): Observable<object> {
    return this.http.put(path, body, httpOptions);
  }

  delete(path: string): Observable<object> {
    return this.http.delete(path, httpOptions);
  }
}
