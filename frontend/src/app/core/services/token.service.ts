import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenServices {

  constructor() { }
  
  private token: string;

  setToken(token: string): void {
    this.token=token;
    sessionStorage.setItem("key", this.token);
  }

  getToken(): string {
    const key = sessionStorage.getItem("key");
    if(key) {
      return key;
    }
  }

  deleteToken(): void {
    sessionStorage.removeItem('key');
  }

}
