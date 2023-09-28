import { Component } from '@angular/core';

@Component({
  selector: 'flatList',
  templateUrl: './flatlist.component.html',
  styleUrls: ['./flatlist.component.css']
})
export class FlatlistComponent {
  flats:any[]=[{
    acre:500,
    room:3,
    rent:45000,
    balcony:2,
    imageUrl:'../../assets/mountain.jpg'
  },{
    acre:1000,
    room:2,
    rent:55000,
    balcony:1,
    imageUrl:'../../assets/beach.jpg'
  },{
    acre:250,
    room:4,
    rent:40000,
    balcony:0,
    imageUrl:'../../assets/roses.jpg'
  }];
}