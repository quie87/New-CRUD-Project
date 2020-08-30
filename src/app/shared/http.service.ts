import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
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
  /*
  constructor(private http: HttpClient, private auth: AuthService) {
    if (this.auth.isAuthenticated()) {
      const token = this.auth.getIdToken();
      httpOptions.headers = httpOptions.headers.set('Authorization', token);
    }
  }

  registerNewUser(newUser: User): Observable<object> {
    console.log('save user');
    return this.http.post(this.baseUrl + '/users', newUser, httpOptions);
  } */
}
