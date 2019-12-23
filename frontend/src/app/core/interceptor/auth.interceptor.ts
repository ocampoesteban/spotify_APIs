import {
    HttpInterceptor,
    HttpRequest,
    HttpHandler,
    HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs";
import { Injectable } from '@angular/core';
import { TokenServices } from '../services/token.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    
    constructor(public utilsServices: TokenServices) { }
    
    intercept(req: HttpRequest<any>, next: HttpHandler ): Observable<HttpEvent<any>> {
        req = req.clone({
            setHeaders: {
              Authorization: `Bearer ${this.utilsServices.getToken()}`
            }
          });
        
        return next.handle(req);
    }
}