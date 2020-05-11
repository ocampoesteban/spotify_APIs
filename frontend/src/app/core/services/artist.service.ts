import { Injectable } from '@angular/core';
import { throwError, Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { IRocker } from '../models/iRocker';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  constructor(private http: HttpClient) { }

  private handleError(error: any) {
    return throwError(error);
  }

  /**
   * Get artist by id
   * @param
   * @returns
   */
  public artistById(artistId: string): Observable<IRocker> {
    const SUFIX_URL = `/v1/artists/${artistId}`;
    return this.http.get<IRocker>(`${environment.apiUrl}${SUFIX_URL}`)
    .pipe(
      map((data: IRocker) => {
        console.log(data);
        return data;
      }),
      catchError(this.handleError)
    );
  }

}
