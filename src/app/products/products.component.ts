import { Component,EventEmitter, Output,OnDestroy, OnInit } from '@angular/core';
import { LoggingService } from 'shared/logging.service';
import { ProductService } from 'shared/products.service';
import { IProducts } from './products';
import { Observable, Subscription } from 'rxjs';
import { GenericValidator } from 'shared/genericValidator';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
  private validationMessages!:{[key:string]:{[key:string]:string}};
  private gv=new GenericValidator(this.validationMessages);

  sub!:Subscription;
  errMssg:string='';
  msg:string='';
  selectedProd!:IProducts | null;
  constructor(private ps:ProductService,private ls:LoggingService){}

  ngOnInit(): void {
    this.ps.getProducts().subscribe((prod:IProducts[])=>{
        this.product=prod;
    },err=>{
      this.errMssg=err;
      console.log(err);
    });
    this.ps.selectedProdChange$.subscribe(currentProd=>{this.selectedProd=currentProd;
    console.log(this.selectedProd);})
  }

  mssg:string=this.ls.log();
  start(){
    alert(this.mssg);
  }

  product!:IProducts[];
  products!:IProducts|null;
  dataReceived=this.ps.getProducts();
  //products:IProducts[]=this.ps.getProducts();
  
  @Output() emitItemtoCart:EventEmitter<IProducts>=new EventEmitter<IProducts>();
  addItem(p:IProducts):void{
    this.emitItemtoCart.emit(p);
  }
  ngOnDestroy():void{
    this.sub.unsubscribe();
  }

  newProd():void{
    console.log('in new product');
    this.ps.changeSelectedProd(this.ps.newProd());
  }
  prodSelected(p:IProducts):void{
    this.ps.changeSelectedProd(p);
  }

  displayProd(prodParam:IProducts|null):void{
    this.products=prodParam;
    if(this.products){
      console.log('reset');
      if(this.products.id===0){
        this.msg='add products as no products';
      }
      else{
        this.msg=`edit products ${this.products.name}`;
      }
    }
  }
}