import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsServices {

  constructor() { }
  
  private token: string;

  setToken(token: string){
    this.token=token;
    window.sessionStorage.setItem("key", this.token);
  }

  getToken(){
    const key = window.sessionStorage.getItem("key");
    if(key) {
      return key;
    }
  }

}
