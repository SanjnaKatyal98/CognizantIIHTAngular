import { Injectable } from "@angular/core";

export class Flower{
    id:number=0;
    name:string='';
    desc:string='';
    image:string='';
    constructor(id:number,name:string,desc:string,image:string){
        this.id=id;
        this.name=name;
        this.desc=desc;
        this.image=image;
    }
}
@Injectable({
    providedIn:'root'
})
export class FlowerService{
    public getFlo(){
        let f:Flower[];
        f=[
            new Flower(1,'rose','smells and looks good','../../assets/roses.jpg'),
            new Flower(2,'tulips','looks good and expensive','../../assets/tulips.jpg'),
            new Flower(3,'hibiscus','also called china rose','../../assets/hibiscus.jpg'),
            new Flower(4,'marigold','smells and looks good,also used in pooja','../../assets/marigld.jpg')
        ];
        return f;
    }
    getFloById(id:number){
        let f:Flower[]=this.getFlo();
        return f.find(e=>e.id==id);
    }
}