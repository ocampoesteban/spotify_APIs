import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  set setToken(token: string) {
    if (token) {
      sessionStorage.setItem("key", token);
    }
  }

  get getToken(): string {
    const token = sessionStorage.getItem("key");
    if(token) {
      return token;
    }
  }

  deleteToken(): void {
    const token = sessionStorage.getItem("key");
    if (token) {
      sessionStorage.removeItem('key');
    }
  }

}
