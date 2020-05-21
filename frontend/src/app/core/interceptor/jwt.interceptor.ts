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
export class JwtInterceptor implements HttpInterceptor {

    constructor(
      public utilsServices: TokenService,
    ) { }

    intercept(req: HttpRequest<any>, next: HttpHandler ):
    Observable<HttpEvent<any>> {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${this.utilsServices.getToken}`
        }
      });

      return next.handle(req);
    }

}
