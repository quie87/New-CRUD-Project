import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token = 'testarensträng';

  constructor() {}

  isAuthenticated(): boolean {
    return true;
  }

  getIdToken(): string {
    return this.token;
  }
}
