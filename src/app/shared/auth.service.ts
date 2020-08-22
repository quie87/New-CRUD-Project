import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap, mapTo } from 'rxjs/operators';
import { User } from './user.model';
import { Router } from '@angular/router';

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

  constructor(private http: HttpClient, private router: Router) {}

  isAuthenticated(): boolean {
    if (localStorage.getItem(this.jwtToken) === null) {
      return false;
    }
    return true;
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
    this.router.navigate(['']);
  }

  private doSignIn(res: any): void {
    this.storeToken(res.token);
    this.setUser(res.user);
    this.router.navigate(['/home']);
  }

  private setUser(user: User): void {
    this.user = user;
  }

  private storeToken(token: string): void {
    localStorage.setItem(this.jwtToken, token);
  }
}
