import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoPageComponent } from './todo-page.component';

const routes: Routes = [
    {path:'',component:TodoPageComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class TodoPageRoutingModule{}