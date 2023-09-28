import { Component, OnInit } from '@angular/core';
import { Flower, FlowerService } from './flower';

@Component({
  selector: 'app-flowers',
  templateUrl: './flowers.component.html',
  styleUrls: ['./flowers.component.css']
})
export class FlowersComponent implements OnInit{
  flowers:Flower[]=[];
  constructor(private service:FlowerService){}
  ngOnInit(): void {
    this.flowers=this.service.getFlo();
  }
}