import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit{
  title='book form';
  bookForm:FormGroup;
  ngOnInit(): void {
  }
  constructor(private fb:FormBuilder){
    this.bookForm=this.fb.group({
      id:['1',[Validators.required,Validators.max(100)]],
      title:['java',[Validators.required,Validators.minLength(3)]],
      author:this.fb.group({
        name:['oracle',[Validators.required,Validators.minLength(5)]],
        email:['rsagarwal@gmail.com',[Validators.required]]
      }),
      dateOf:["1999-09-09",[Validators.required]]
    });
  }
  onSubmit(){
    console.log(this.bookForm.value);
  }
  get id(){
    return this.bookForm.get("id");
  }
  get fullName(){
    return this.bookForm.get("fullName");
  }
  get auth(){
    return this.bookForm.get("mail");
  }
  get mail(){
    return this.bookForm.get("mail");
  }
  get dateOf(){
    return this.bookForm.get('dateOf');
  }
}