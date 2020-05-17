import { Injectable } from '@angular/core';
import { throwError, Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

import { IRocker } from '../models/iRocker';
import { Album } from '../models/album';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  constructor(private http: HttpClient) { }
  URL = 'https://api.spotify.com/v1/artists/';

  private handleError(error: any) {
    return throwError(error);
  }

  /**
   * Get artist by id
   * @param
   * @returns
   */
  getArtistById(artistId: string): Observable<IRocker> {
    const SUFIX_URL = `${this.URL}${artistId}`;
    return this.http.get<IRocker>(`${SUFIX_URL}`)
    .pipe(
      map((data: IRocker) => {
        console.log(data);
        return data;
      }),
      catchError(this.handleError)
    );
  }

  /**
   * Get album by artistId
   * @param artistId
   * @returns Album[]>
   */
  getAbumByArtistId(artistId: string): Observable<Album[]> {
    const SUFIX_URL = `${this.URL}${artistId}/albums`;
    return this.http.get<Album[]>(`${SUFIX_URL}`)
    .pipe(
      map((data: Album[]) => {
        console.log(data);
        return data;
      }),
      catchError(this.handleError)
    );
  }

  /**
   * Get album by artistId
   * @param artistId
   * @returns Album[]>
   */
  getArtistRelatatedToArtistId(artistId: string): Observable<IRocker[]> {
    const SUFIX_URL = `${this.URL}${artistId}/related-artists`;
    return this.http.get<IRocker[]>(`${SUFIX_URL}`)
    .pipe(
      map((data: IRocker[]) => {
        console.log(data);
        return data;
      }),
      catchError(this.handleError)
    );
  }

}
