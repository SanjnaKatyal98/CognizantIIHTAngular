import { Component, OnInit } from '@angular/core';
import { Employee,EmpService } from './employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit{
  emps:Employee[]=[];
  constructor(private service:EmpService){}
  ngOnInit(): void {
    this.emps=this.service.getEmp();
  }
}