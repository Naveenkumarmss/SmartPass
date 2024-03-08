// import { Token } from "@angular/compiler";
// import { Injectable } from "@angular/core";
// import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from "@angular/router";
// import { Observable } from "rxjs";

// class Permissions {
//   canActivate(user: Token): boolean {
//     return true;
//   }
// }

// @Injectable()
// class AuthGard implements CanActivate {
//   constructor(private permissions: Permissions, private currentUser: Token) {}

//   canActivate(
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot
//   ): Observable<boolean|UrlTree>|Promise<boolean|UrlTree>|boolean|UrlTree {
//     return this.permissions.canActivate(this.currentUser);
//   }
// }