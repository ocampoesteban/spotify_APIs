import {
    HttpInterceptor,
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpErrorResponse} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { TokenService } from '../services/token.service';
import { catchError } from 'rxjs/internal/operators/catchError';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

    constructor() { }

    intercept(req: HttpRequest<any>, next: HttpHandler ):
    Observable<HttpEvent<any>> {
      return next.handle(req)
      .pipe(
        catchError(this.handleError)
      );
    }

    handleError(error: HttpErrorResponse) {
      const errorObject = {
        message: error.error.error.message,
        statusText:  error.statusText,
        status: error.status
      };


      if ([401, 403].indexOf(error.status) !== -1) {
        // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
        //  this.authenticationService.logout();
       // location.reload(true);
      }

      console.log(errorObject);
      return throwError(errorObject);
    }
}
