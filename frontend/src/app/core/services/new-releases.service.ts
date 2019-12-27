import { Injectable } from '@angular/core';
import { throwError, Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Album } from '../models/album';

@Injectable({
  providedIn: 'root'
})
export class NewReleasesService {

  constructor(private http: HttpClient) { }

  private API_URL: string = 'https://api.spotify.com/v1/';

  private handleError(error: any) {
    console.log(error);
    return throwError(error);
  }

  /**
   * Get New releases list
   * @param
   * @returns
   */
  public getNewRealeases(): Observable<Album> {
    const SUFIX_URL: string = 'browse/new-releases';
    
    return this.http.get<Album>(`${this.API_URL}${SUFIX_URL}`).pipe(
      map((data:Album) => {
        return data;
      }), catchError(this.handleError)
    );
  }

}
