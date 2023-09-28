import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.css']
})
export class GreetingComponent implements OnInit{
  //@Input() 
  //mssg!:string;
  mssg:string='welcome to angular';
  constructor(private http:HttpClient){}
  ngOnInit(): void {
    console.log('subscribed values-');
    //unicast
    const obs=new Observable((data)=>data.next(Math.random()));
    obs.subscribe((d)=>console.log(d));
    obs.subscribe((d)=>console.log(d));
    //multicast
    const subject=new Subject();
    subject.subscribe(d=>console.log(d));
    subject.subscribe(d=>console.log(d));
    subject.next(Math.random());
    /*
    const data=this.http.get('/api/products');
    data.subscribe(d=>console.log(d));
    data.subscribe(d=>console.log(d));
    */
    const subject1=new Subject();
    const data=this.http.get('/api/products');
    subject1.subscribe(d=>console.log(d));
    subject1.subscribe(d=>console.log(d));
    const result=data.subscribe(subject1);
    //subject1.next(data);
  }
}