import { Injectable } from '@angular/core';
import { throwError } from 'rxjs/internal/observable/throwError';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { map,catchError } from 'rxjs/internal/operators';
import { TokenServices } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  constructor(public http: HttpClient, public tokenService: TokenServices) { }

  private API_URL: string = 'https://api.spotify.com/v1/';

  private handleError(error: any) {
    console.log(error);
    return throwError(error);
  }

  getUserData(): Observable<User> {
    const SUFIX_URL: string = 'me/'

    return this.http.get<User>(`${this.API_URL}${SUFIX_URL}`).pipe(
      map((data:User) => {
        return data;
      }), catchError(this.handleError)
    );
  }
}
