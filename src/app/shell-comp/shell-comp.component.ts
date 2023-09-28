import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-shell-comp',
  templateUrl: './shell-comp.component.html',
  styleUrls: ['./shell-comp.component.css']
})
export class ShellCompComponent implements OnInit,OnChanges,OnDestroy{
  msg='hello';
  ngOnInit(): void {
    console.log('shell component created');
  }
  constructor(){
    console.log('shell component constructr');
  }
  ngOnDestroy(): void {
    console.log('shell component destroyed');
  }
  ngOnChanges():void{
    console.log('shell component changes');
  }
  ngDoCheck(){
    console.log('doCheck of shell component');
  }
  ngAfterContentInIt(){
    console.log('shell component content');
  }
  ngAfterContentChecked(){
    console.log('shell component content checked');
  }
  ngAfterViewInIt(){
    console.log('shell component view');
  }
  ngAfterViewChecked(){
    console.log('shell component view checked');
  }
}