import { Injectable } from '@angular/core';
import { throwError } from 'rxjs/internal/observable/throwError';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { map,catchError } from 'rxjs/internal/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(
    private http: HttpClient
  ) { }

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
    const SUFIX_URL = '/v1/me/';

    return this.http
      .get(`${SUFIX_URL}`)
      .pipe(
        map((data: User) => {
          return new User(data);
        }), catchError(this.handleError)
      );
  }
}
