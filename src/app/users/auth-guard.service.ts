import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable({
    providedIn:'root'
})
export class AuthGuard implements CanActivate{
    constructor(private authService:AuthService,private router:Router){}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
      return this.checkLoggedIn(state.url);


}
 checkLoggedIn(url:string):boolean{
    //first you try line number 18 ,as  a regular user , no need to check if admin
    //if(this.authService.isLoggedIn()){
        //later you try for admin routes
        //this route will be active only for admin users
        //create one admin user and use it
    if(this.authService.isAdmin())
    return true;
    this.authService.redirectToUrl=url;
    this.router.navigate(['/login']);
    return false;
 }
}