import { Injectable } from '@angular/core';
import { throwError, Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Album } from '../models/album';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewReleasesService {

  constructor(private http: HttpClient) { }

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
    const SUFIX_URL = '/v1/browse/new-releases';

    return this.http.get<Album>(`${SUFIX_URL}`)
    .pipe(
      map((data:Album) => {
        console.log(data)
        return data;
      }), catchError(this.handleError)
    );
  }

}
