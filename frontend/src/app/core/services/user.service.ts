import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { map, retry } from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(
    private http: HttpClient, 
  ) { }

  readonly API_URL: string = 'https://api.spotify.com/v1/';

  /**
   * Get User list
   * @param
   * @returns
   */
  getUserData(): Observable<User> {
    const SUFIX_URL: string = 'med/';

    return this.http
      .get(`${this.API_URL}${SUFIX_URL}`)
      .pipe(
        map((data: User) => {
          return new User(data);
        }),
        retry(1), // try twice before throwing Error
      );
  }
}
