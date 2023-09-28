import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Employee, EmpService } from '../employee/employee';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit,OnDestroy{
  id:number=0;
  emp:Employee | undefined;
  sub!:Subscription;

  ngOnInit(): void {
    this.sub=this.ar.paramMap.subscribe((params)=>{
      console.log(params);
      let idd=params.get('id');
      if(idd)
        this.id=+idd;
      if(this.service.getEmpById(this.id))
        this.emp=this.service.getEmpById(this.id);
    });
  }
  constructor(private ar:ActivatedRoute,private router:Router,private service:EmpService){}
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
  
  back(){
    this.router.navigate(['emps']);
  }
}