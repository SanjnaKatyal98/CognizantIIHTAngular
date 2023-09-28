import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {
  name:string='sanjna';
  name1:string='SHAHID';
  d:Date=new Date('10-28-1998');
  d1:Date=new Date('09-09-1998');
  pi=3.14159265359;
  fullname:string='sanjna shahid hussain';
  n:number=0;
}