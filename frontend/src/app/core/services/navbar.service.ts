import { Injectable } from '@angular/core';
import { throwError } from 'rxjs/internal/observable/throwError';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { map,catchError } from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  constructor(
    private http: HttpClient, 
  ) { }

  API_URL: string = 'https://api.spotify.com/v1/';

  private handleError(error: any) {
    console.log(error);
    return throwError(error);
  }

  /**
   * Get User list
   * @param
   * @returns
   */
  getUserData(): Observable<User> {
    const SUFIX_URL: string = 'me/';

    return this.http
      .get(`${this.API_URL}${SUFIX_URL}`)
      .pipe(
        map((data: any) => {
          return new User(data);
        }), catchError(this.handleError)
      );
  }
}
