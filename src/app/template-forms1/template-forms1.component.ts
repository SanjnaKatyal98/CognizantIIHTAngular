import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
export class Trustee{
  id!:number;
  name!:string;
  sex!:string; 
  countryOfResidence!:string;
  passport!:string;  
  issuanceDate!:Date;
  noOfDependents!:number;
}
export class Countries{
  id!:string;
  name!:string;
  constructor(id:string,name:string){
    this.name=name;
    this.id=id;
  }
}
@Component({
  selector: 'templateForms1',
  templateUrl: './template-forms1.component.html',
  styleUrls: ['./template-forms1.component.css']
})
export class TemplateForms1Component implements OnInit{
  trustee!:Trustee;
  @ViewChild('tForm',{})tForm!:NgForm;
  ngOnInit(): void {
    this.trustee={
      id:928,
      name:'sanjna shahid',
      sex:'female',
      countryOfResidence:'india',
      passport:'092810',
      issuanceDate:new Date('09/09/1998'),
      noOfDependents:1
    };
    setTimeout(()=>{
      this.tForm.setValue(this.trustee);
    });
  }

  onSubmit(tForm:NgForm){
    alert('form submitted');
    console.log('success');
    console.log(tForm.value);
  }
  reset(tForm:NgForm){
    tForm.resetForm();
  }

  countries:Countries[]=[
    new Countries("0","Select"),
    new Countries("1","India"),
    new Countries("2","Other")
  ];

  changeCountry(){
    this.tForm.controls['countries'].setValue("1");
  }
}