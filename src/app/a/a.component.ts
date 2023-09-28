import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.css']
})
export class AComponent implements OnInit{
  name:string='sanjna';
  msg:string='';
  constructor(){}
  ngOnInit(): void {
  }
  nameChangeHandler(msg:string){
    console.log('inside a component');
    this.msg=msg;
  }
}
