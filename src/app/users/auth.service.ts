import { Injectable } from "@angular/core";
import { User } from "./user";

@Injectable({
    providedIn:'root'
})
export class AuthService{

    //get the current user --welcome username
    //we need to whether the user has logged in or not
    //we have to log out the user

    currentUser!:User |null;
    redirectToUrl!:string;

    constructor(){}

    isLoggedIn():boolean{
        return !!this.currentUser;
    }

    login(userName:string,password:string):void{

     //service which connect to back end api to validate the user


     this.currentUser={
        id:2,
        userName,
        isAdmin:true
     };

    }

    logOut():void{
        this.currentUser=null;
    }
    isAdmin():boolean{
        if(this.currentUser)
        return this.currentUser?.isAdmin;

        return false;
    }
}