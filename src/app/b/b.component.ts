import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.css']
})
export class BComponent implements OnInit{
  @Input() name:string='';
  @Output() nameChange:EventEmitter<string>=new EventEmitter<string>();
  constructor(){}
  ngOnInit(): void {
  }
  onClick(){
    this.nameChange.emit(`name changed`);
  }
}