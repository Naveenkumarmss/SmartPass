import { HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { ChangeDetectorRef, Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({
    providedIn: "root"
})
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private route: Router, 
    private cdRef: ChangeDetectorRef    
    ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const [token, cookie, ...rest] = document.cookie.split("=");

    // if(req.url.includes("login") || req.url.includes("signup")) {
        // const authReq = req.clone();
    //     return next.handle(authReq);
    // }

    // if(token != 'token') {
    //     this.route.navigate(['/login']);
    //     this.cdRef.detectChanges();
    // }
    // const authReq = req.clone({
    //   headers: req.headers.set('Authorization', cookie)
    // });
    const authReq = req.clone();
    return next.handle(authReq);
  }
}