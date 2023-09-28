import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoPageComponent } from './todo-page.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TodoPageComponent
  ],
  imports: [
    CommonModule,FormsModule
  ]
})
export class TodoModule { }