import {
    HttpInterceptor,
    HttpRequest,
    HttpHandler,
    HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs";
import { Injectable } from '@angular/core';
import { UtilsServices } from '../services/utils.services.ts.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(public utilsServices: UtilsServices) { }
    
    token:string =  this.utilsServices.getToken();
    
    intercept(req: HttpRequest<any>, next: HttpHandler ): Observable<HttpEvent<any>> {
        const cloneReq = req.clone({
        params: req.params.set(
            "auth-token",
            this.token
        )});
        
        return next.handle(cloneReq);
    }
}