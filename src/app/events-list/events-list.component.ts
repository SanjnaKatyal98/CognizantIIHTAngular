import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { IEvent } from './events';
import { Subscription } from 'rxjs';
import { EventService } from 'shared/events.service';
@Component({
  selector: 'app-eventsList',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit,OnDestroy{
  sub!:Subscription;
  events:IEvent[]=[];
  constructor(private es:EventService){}
  ngOnInit(): void {
    this.sub=this.es.getEvents().subscribe((response)=>{
      this.events=response;
    },(err)=>
      {console.log(err);});
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}