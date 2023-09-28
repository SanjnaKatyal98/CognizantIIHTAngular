import { Component, OnInit } from '@angular/core';
export class Country{
  id:string='';
  name:string='';
  constructor(id:string,name:string){
    this.id=id;
    this.name=name;
  }
}
@Component({
  selector: 'templateForms',
  templateUrl: './template-forms.component.html',
  styleUrls: ['./template-forms.component.css']
})
export class TemplateFormsComponent implements OnInit{
  constructor(){}
  ngOnInit(): void {}
  countries:Country[]=[
    new Country('0','Select..'),
    new Country('1','India'),
    new Country('2','Other')
  ];
  onSubmit(tempForm:any){
    alert('form submitted');
    console.log('success');
  }
  reset(tempForm:any){
    tempForm.resetForm();
  }
}