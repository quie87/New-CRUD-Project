import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap, mapTo } from 'rxjs/operators';
import { User } from '../user.model';
import { Router } from '@angular/router';
import { Notification } from '../../shared/Notification';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private serverUrl = 'https://my-todo-rest-api.herokuapp.com/';
  private jwtToken = 'JWT-Token';
  private user: User;

  notification = new Notification();

  constructor(private http: HttpClient, private router: Router) {}

  isAuthenticated(): boolean {
    return localStorage.getItem(this.jwtToken) === null ? false : true;
  }

  loadUser(): Observable<any> {
    httpOptions.headers = httpOptions.headers.set('x-auth-token', this.getTokenFromStore());

    return this.http.get(this.serverUrl + 'users', httpOptions).pipe(
      tap((resp: any): any => this.setUser(resp.user)),
      mapTo(true),
      catchError((error: any): any => {
        this.logOut();
        return of(false);
      })
    );
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

  getUser(): User {
    return this.user;
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
    this.user = null;
    this.router.navigate(['']);
  }

  private storeToken(token: string): void {
    localStorage.setItem(this.jwtToken, token);
  }

  private getTokenFromStore(): string {
    return localStorage.getItem(this.jwtToken);
  }

  private setUser(user: User): void {
    this.user = user;
  }

  private doSignIn(res: any): void {
    this.storeToken(res.token);
    this.setUser(res.user);
    this.router.navigate(['/home']);
  }
}
