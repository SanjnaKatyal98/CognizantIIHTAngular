import { Injectable } from "@angular/core";

export class Employee{
    id:number=0;
    name:string='';
    dept:string='';
    sal:number=0;
    constructor(id:number,name:string,dept:string,sal:number){
        this.id=id;
        this.name=name;
        this.dept=dept;
        this.sal=sal;
    }
}
@Injectable({
    providedIn:'root'
})
export class EmpService{
    public getEmp(){
        let emps:Employee[];
        emps=[
            new Employee(1,'sanjna','IT',98000),
            new Employee(2,'shahid','Business',280000),
            new Employee(3,'temp','temp',12130)
        ];
        return emps;
    }
    getEmpById(id:number){
        let emp:Employee[]=this.getEmp();
        return emp.find(e=>e.id==id);
    }
}