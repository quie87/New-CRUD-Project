import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { catchError, tap, mapTo } from 'rxjs/operators';
import { userInfo } from 'os';
import { User } from './user.model';
import { HttpService } from './http.service';
import { Token } from '@angular/compiler/src/ml_parser/lexer';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  serverUrl = 'https://my-todo-rest-api.herokuapp.com/';
  private jwtToken = 'JWT-Token';
  user: User;
  authenticated = false;

  constructor(private http: HttpClient) {}

  isAuthenticated(): boolean {
    return this.authenticated;
  }

  getUser(): User {
    return this.user;
  }

  getToken(): string {
    return this.jwtToken;
  }

  storeToken(token: string): void {
    localStorage.setItem(this.jwtToken, token);
  }

  setAuthenticated(): void {
    this.authenticated = true;
  }

  registerNewUser(userToRegistrate: object): Observable<any> {
    return this.http.post(this.serverUrl + 'users/signup', userToRegistrate, httpOptions).pipe(
      tap((resp: any): any => this.signIn(resp)),
      mapTo(true),
      catchError((error: any): any => {
        console.log(error.error);
        return of(false);
      })
    );
  }

  signIn(res: any): void {
    this.storeToken(res.token);
    this.setUser(res.user);
  }

  setUser(user: User): void {
    this.user = user;
  }

  logOut(): void {
    localStorage.removeItem(this.jwtToken);
    this.authenticated = false; // tror inte jag behöver denna
    // Remove token from localstorage/sessionstorage
  }
}
