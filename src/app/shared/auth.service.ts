import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap, mapTo } from 'rxjs/operators';
import { User } from './user.model';

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

  registerNewUser(userToRegistrate: object): Observable<any> {
    return this.http.post(this.serverUrl + 'users/signup', userToRegistrate, httpOptions).pipe(
      tap((resp: any): any => this.doSignIn(resp)),
      mapTo(true),
      catchError((error: any): any => {
        console.log(error.error);
        return of(false);
      })
    );
  }

  signIn(userToSignIn: object): Observable<any> {
    return this.http.post(this.serverUrl + 'users/login', userToSignIn).pipe(
      tap((resp: any): any => this.doSignIn(resp)),
      mapTo(true),
      catchError((error: any): any => {
        console.log(error.error);
        return of(false);
      })
    );
  }

  logOut(): void {
    localStorage.removeItem(this.jwtToken);
    this.jwtToken = '';
    this.authenticated = false; // tror inte jag behöver denna
  }

  private doSignIn(res: any): void {
    this.storeToken(res.token);
    this.setUser(res.user);
    this.setAuthenticated();
  }

  private setUser(user: User): void {
    this.user = user;
  }

  private setAuthenticated(): void {
    this.authenticated = true;
  }

  private storeToken(token: string): void {
    localStorage.setItem(this.jwtToken, token);
  }
}
