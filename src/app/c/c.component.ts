import { Component,OnInit} from '@angular/core';

@Component({
  selector: 'app-c',
  templateUrl: './c.component.html',
  styleUrls: ['./c.component.css']
})
export class CComponent implements OnInit{
  name:string='shahid';
  newMsg:string='';
  constructor(){}
  ngOnInit(): void {
  }
  nameChangeHandler(msg:string){
    console.log('inside c component');
    this.newMsg=msg;
  }
}