import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit,OnChanges{
  @Input() rating:number=0;
  cropWidth:number =75;
  constructor(){}
  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.cropWidth=this.rating * 75/5;
  }
  @Output() ratingClicked:EventEmitter<string>=new EventEmitter<string>();
  onClick(){
    console.log('inside star');
    this.ratingClicked.emit(` this ${this.rating} rating was clicked`);
  }
}