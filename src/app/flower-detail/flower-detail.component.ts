import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Flower, FlowerService } from '../flowers/flower';

@Component({
  selector: 'app-flower-detail',
  templateUrl: './flower-detail.component.html',
  styleUrls: ['./flower-detail.component.css']
})
export class FlowerDetailComponent implements OnDestroy,OnInit{
  id:number=0;
  flower:Flower | undefined;
  sub!:Subscription;

  ngOnInit(): void {
    this.sub=this.ar.paramMap.subscribe((params)=>{
      console.log(params);
      let idd=params.get('id');
      if(idd)
        this.id=+idd;
      if(this.service.getFloById(this.id))
        this.flower=this.service.getFloById(this.id);
    });
  }
  constructor(private ar:ActivatedRoute,private router:Router,private service:FlowerService){}
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
  
  back(){
    this.router.navigate(['flowers']);
  }
}