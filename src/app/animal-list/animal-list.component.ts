import { Component, OnInit } from '@angular/core';
import {IAnimals} from './animal';
@Component({
  selector: 'animalList',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.css']
})
export class AnimalListComponent implements OnInit{
  imgH:number=150;
  imgW:number=150;
  imgM:number=5;
  dispImg:boolean=false;
  num:number=0;
  filteredList:IAnimals[]=[];

  ngOnInit(): void {
    this.filteredList= this.animals;
  }

  get animAge():number{
    return  this.num;
  }
  set animAge(val:number){
    this.num=val;
    console.log('in setter ',val);
    this.filteredList=this.filterData(val);
    console.log('in setter ',this.filteredList);
  }

  filterData(val:number):IAnimals[]{
    val=this.num;
    return this.animals.filter((animals:IAnimals)=>animals.age==val);
  }

  animals:IAnimals[]=[{
    name:'fish',
    desc:'water type pokemon',
    age:15,
    imageUrl:'../../assets/moon.jpeg'
  },{
    name:'lion',
    desc:'earth type pokemon',
    age:5,
    imageUrl:'../../assets/moon.jpeg'
  },{
    name:'hummingbird',
    desc:'air type pokemon',
    age:2,
    imageUrl:'../../assets/moon.jpeg'
  },{
    name:'pheonix',
    desc:'fire type pokemon',
    age:100,
    imageUrl:'../../assets/moon.jpeg'
  }];

  disp():void{
    this.dispImg=!this.dispImg;
  }
}