import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'reactiveForms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit{
  title='student form';
  studForm:FormGroup;
  ngOnInit(): void {
  }
  constructor(private fb:FormBuilder){
    this.studForm=this.fb.group({
      id:['1',[Validators.required,Validators.max(100)]],
      name:['sanjna',[Validators.required,Validators.minLength(3)]],
      email:['sanj@gmail.com',[Validators.required,Validators.email]],
      sex:['female'],
      addr:this.fb.group({
        city:['delhi',[Validators.required]],
        state:['delhi',[Validators.required]],
        country:['india',[Validators.required]]
      })
    });
    /*this.studForm=new FormGroup({
      id:new FormControl('',Validators.required),
      name:new FormControl('',[Validators.required,Validators.minLength(3)]),
      email:new FormControl('',[Validators.required,Validators.email]),
      sex:new FormControl(''),
      addr:new FormControl('',Validators.required)
    });*/
  }

  onSubmit(){
    console.log(this.studForm.value);
  }
  get id(){
    return this.studForm.get("id");
  }
  get fullName(){
    return this.studForm.get("fullName");
  }
  get mail(){
    return this.studForm.get("mail");
  }
  get sex(){
    return this.studForm.get("sex");
  }
  get city(){
    return this.studForm.get("addr")?.get("city");
  }
  get state(){
    return this.studForm.get("addr")?.get("state");
  }
  get country(){
    return this.studForm.get("addr")?.get("country");
  }

  progs():FormArray{
    return this.studForm.get("progs") as FormArray;
  }
  addProgs(){
    this.progs().push(this.newProg());
  }
  newProg():FormGroup{
    return this.fb.group({
      progName:'',
   });
  }
  
  removeProgs(pIndex:number){
    this.progs().removeAt(pIndex);
  }

  duration(pIndex:number):FormArray{
    return this.progs().at(pIndex).get("duration") as FormArray;
  }

  Newduration():FormGroup{
   return this.fb.group({
     time:'',
     place:''
    });
  }

  addDuration(pIndex:number){
    this.duration(pIndex).push(this.Newduration());
  }

  removeDuration(pIndex:number,dIndex:number){
    this.duration(pIndex).removeAt(dIndex);
  }
}