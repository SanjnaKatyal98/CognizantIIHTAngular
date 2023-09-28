/* import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, tap, throwError, BehaviorSubject, map } from "rxjs";
import { IProducts } from "src/app/products/products";
@Injectable({
    providedIn:'root'
})
export class ProductService{
  private url='api/products.json';
  private selectedProdSource=new BehaviorSubject<IProducts|null>(null);
  selectedProdChange$=this.selectedProdSource.asObservable();
  products:IProducts[]=[];

  constructor(private http:HttpClient){}
  newProd():IProducts{
    return {
      id:0,
      name:'sk',
      price:100,
      image:'#'
    };
  }

  createProd(prod:IProducts):Observable<IProducts>{
    const headers=new HttpHeaders({'content-type':'application/json'});
    const newProd={...prod,id:null};
    return this.http.post<IProducts>(this.url,newProd,{headers})
    .pipe(tap(data=>
      {console.log('in create product'+JSON.stringify(data));
       this.products.push(data);
    },catchError(this.errHandler)
    ));
  }

  getProducts():Observable<IProducts[]>{
    return this.http.get<IProducts[]>(this.url)
      //.pipe(tap(data=>console.log(JSON.stringify(data))),
      .pipe(tap(data=>{console.log(data);this.products=data;}),
      catchError(this.errHandler));
        /* return [
            {
                id:1,
                name:"Pizza",
                price:400,
                image: "../../assets/beach.jpg"
              },{
                id:2,
                name:"Shirt",
                price:300,
                image: "../../assets/roses.jpg"
              },{
                id:3,
                name:"Lipstick",
                price:200,
                image: "../../assets/moon.jpeg"
              },{
                id:4,
                name:"bed",
                price:1000,
                image: "../../assets/mountain.jpg"
              }
        ];*/
    /*}

    changeSelectedProd(selectedProd:IProducts|null):void{
      console.log(this.selectedProdSource.next(selectedProd));
    }
    
    errHandler=(err:any)=>{
      throw new Error(`some error ${err}`);
      /*let errorMessage: string;
      if (err.error instanceof ErrorEvent) {
        errorMessage = `An error has occured ${err.error.message}`;
      } else {
        errorMessage = `Backend error code ${err.status} ${err.body.error}`;
      }
      console.log(err);
      return throwError(errorMessage);*/
   /* }
    
    updateProduct(prod: IProducts):Observable<IProducts>{
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      const url = `${this.url}/${prod.id}`;
      return this.http.put<IProducts>(url, prod, { headers }).pipe(
        tap(() => {
          console.log('update product' + prod.id);
          const foundIndex = this.products.findIndex(item=>item.id===prod.id);
          if(foundIndex>-1)
            this.products[foundIndex]=prod;
        }),
        map(() => prod),
        catchError(this.errHandler)
      );
    }

    deleteProd(id:number):Observable<{}>{
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      const url = `${this.url}/${id}`;
      return this.http.delete<IProducts>(url, { headers }).pipe(
        tap(data=> {
          console.log('delete product' + id);
          const foundIndex = this.products.findIndex(item=>item.id===id);
          if(foundIndex>-1)
            this.products.splice(foundIndex,1);
        },
        catchError(this.errHandler)));
    }
} */


import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  catchError,
  map,
  Observable,
  tap,
  throwError,
} from 'rxjs';
import { IProduct, Categories } from 'src/app/newproducts/product-list/product';


@Injectable({
  providedIn: 'root',
})
export class ProductService {
  foundIndex: number = 0;
  //angular DI will resolve the dependency of ProductService class on HttpClient
  //A -- B --C
  //ProductListComponent it has a dependency mentioned in the constructors
  //P roductService --constructor -- it says ProductService has  a dependency of type HttpClient

  ///api/products --will be resolved from in-memory web api -- /api/products
  public url = 'api/products';
  products: IProduct[] = [];

  //why are we using BehaviorSubject
  //BehaviorSubject is a subtype of Observable
  //BehaviorSubject --it will emit only the last value of the source observable
  //BehaviorSubject will ensure that every consumer get recent most value
  //selection --selected object from the list of values
  private selectedProductSource = new BehaviorSubject<IProduct | null>(null);

  //conventionally you can put $ to the var if it is a Observable
  selectedProductChanges$ = this.selectedProductSource.asObservable();

  constructor(private http: HttpClient) {}

  // getProducts() : Observable<IProduct[]>{
  //     return this.http.get<IProduct[]>('api/products/');
  // }

  getProducts(): Observable<IProduct[]> {
    //what is the logic
    //to get array of IProduct from db
    //get method is a generic method IProduct[]
    //arguments u are passing this.url api/products --- api
    //pipe -- operator in rxjs  where you ca
    return this.http.get<IProduct[]>(this.url).pipe(
      tap((data) => {
        console.log(data);
        //we are assigning data to this.products
        this.products = data;
      }),
      catchError(this.errorHandler)
    );
  }

  changeSelectedProduct(selectedProduct: IProduct | null): void {
    this.selectedProductSource.next(selectedProduct);
    console.log(selectedProduct);
    console.log(this.selectedProductChanges$);
    console.log(this.selectedProductSource);
  }

  //errorhandler which returns the Observable with errorMessage
  errorHandler = (err: any) => {
    let errorMessage: string;
    //a client side error or network error then ErrorEvent object will be thrown

    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error has occured ${err.error.message}`;
    } else {
      errorMessage = `Backend error code ${err.status} ${err.body.error}`;
    }
    console.log(err);
    return throwError(errorMessage);
  };

  // a method newProduct which acts like a constructor of creating a new Product
  //what is name of the method -- newProduct
  //how many args --zero args
  //return type IProduct

  newProduct(): IProduct {
    //logic should focus on sending back a IProduct
    return {
      id: 0,
      name: '',
      category: Categories.Food,
      price: 0,
      image: '',
      rating: 0,
      quantity: 0,
    };
  }

  //what ever is in the request body, that is the object of IProduct
  //http post request  with the request body and request headers -content type application/json
  //url is the collection of events ==  /api/events

  //what is the method name --createProduct
  //args -- product of type IProduct
  //return Observable<IProduct>

  createProduct(product: IProduct): Observable<IProduct> {
    //headers variable to set request headers
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    //newProduct spread across product
    const newProduct = { ...product, id: null };

    //return logic starts here
    //http .post method
    //generics method -- IProduct
    //args --3 url , newProduct ,headers
    //this.url -- declared in the class outside the functions
    return this.http.post<IProduct>(this.url, newProduct, { headers }).pipe(
      tap((data) => {
        console.log('in create new product' + JSON.stringify(data));
        //pushing the new data new Product to the products array
        this.products.push(data);
      }, catchError(this.errorHandler))
    );
  }

  //delete  api/events --- delete mapping api/events/1

  deleteProduct(id: number): Observable<{}> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    //@DeleteMapping deleteAll delete url/id  /api/products/111
    const url = `${this.url}/${id}`;

    return this.http.delete<IProduct>(url, { headers }).pipe(
      tap((data) => {
        console.log('deleted prd' + id);
        const foundIndex = this.products.findIndex((item) => item.id === id);
        //if product id is not found means index returned will be -1
        if (foundIndex > -1) this.products.splice(foundIndex, 1);
      }, catchError(this.errorHandler))
    );
  }

  //update a product
  // means two steps -- one when the user selects a particular data from the list and clicks on edit button
  //you can render a new component ProductEditComponent --form with all the required fields
  // name price qty
  //ngOnInit -- it should get the values of the selectedProduct  from the ProductListComponent
  //in that form , pre fill the data from the db with the selected product
  //user will modify
  //user will submit  ,this new product data will be used in http put with the id
  getProductById(id: number): Observable<IProduct> {
    return this.getProducts().pipe(
      tap(() => {
        console.log('fetch product' + id);
        this.foundIndex = this.products.findIndex((item) => item.id == id);
        if (this.foundIndex > -1) {
          this.products[this.foundIndex];
        }
      }),
      map(() => this.products[this.foundIndex]),
      catchError(this.errorHandler)
    );
  }

  updateProduct(product: IProduct): Observable<IProduct> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    //put http method
    const url = `${this.url}/${product.id}`;

    //logic to call http put method to update the product on the given url
    return this.http.put<IProduct>(url, product, { headers }).pipe(
      tap(() => {
        console.log('update product' + product.id);
        const foundIndex = this.products.findIndex(
          (item) => item.id === product.id
        );
        if (foundIndex > -1) {
          this.products[foundIndex] = product;
        }
      }),
      map(() => product),
      catchError(this.errorHandler)
    );
  }
}