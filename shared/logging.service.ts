/* import { Injectable } from "@angular/core";
@Injectable({
    providedIn:'root'
})
export class LoggingService{
    log():string{
        return 'logging service eg';
    }
} */

import { Injectable } from "@angular/core";
import { IProduct } from "src/app/newproducts/product-list/product";


@Injectable({
    providedIn:'root'
})

export class LoggingService{
    log():string{
        return "logging service called!";
    }

    logProducts(p:IProduct[]):void{
        console.log(p);
    }
}