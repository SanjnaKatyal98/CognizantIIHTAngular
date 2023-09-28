import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
/*import { GreetingComponent } from './greeting/greeting.component';
import { AComponent } from './a/a.component';
import { CartComponent } from './cart/cart.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PipesComponent } from './pipes/pipes.component';
import { EventsListComponent } from './events-list/events-list.component';
import { AnimalListComponent } from './animal-list/animal-list.component';
import { FlatlistComponent } from './flatlist/flatlist.component';
import { ProductsComponent } from './products/products.component';
import { ProductListComponent } from './product-list/product-list.component';
import { PenthouseComponent } from './penthouse/penthouse.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TemplateFormsComponent } from './template-forms/template-forms.component';
import { TemplateForms1Component } from './template-forms1/template-forms1.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { EmpArrayFormComponent } from './emp-array-form/emp-array-form.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BooksComponent } from './books/books.component';
import { CComponent } from './c/c.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { EmployeeListComponent } from './employee/employee-list.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { FlowersComponent } from './flowers/flowers.component';
import { FlowerDetailComponent } from './flower-detail/flower-detail.component';
import { LoginComponent } from './login/login.component';
//import { LoginComponent } from './users/login.component';
import { ShellCompComponent } from './shell-comp/shell-comp.component';*
import { AppComponent } from './app.component';*/
import { MenuComponent } from './menu/menu.component';
import { TodoPageComponent } from './todo/todo-page.component';

const routes: Routes = [
  {path:'',pathMatch:'full',component:MenuComponent},
  {path:'',component:TodoPageComponent},
  {path:'todo',loadChildren:()=>import('./todo/todo.module').then((m)=>m.TodoModule)},
  /*{path:'',pathMatch:'full',component:ShellCompComponent},
  {path:'greeting',component:GreetingComponent},
  {path:'login',component:LoginComponent},
  {path:'template forms',component:TemplateFormsComponent},
  {path:'welcome',component:WelcomeComponent},
  {path:'animal list',component:AnimalListComponent},
  {path:'pipes',component:PipesComponent},
  {path:'student',component:ReactiveFormsComponent},
  {path:'books',component:BooksComponent},
  {path:'penthouse',component:PenthouseComponent},
  {path:'a',component:AComponent},
  {path:'flat list',component:FlatlistComponent},
  {path:'c',component:CComponent},
  {path:'cart',component:CartComponent},
  {path:'product list',component:ProductListComponent},
  {path:'navbar',component:NavbarComponent},
  {path:'products',component:ProductsComponent},
  {path:'employee',component:EmpArrayFormComponent},
  {path:'events/:id',component:EventsListComponent},
  {path:'template forms 1',component:TemplateForms1Component},
  {path:'',pathMatch:'full',component:HomepageComponent},
  {path:'about us',component:AboutUsComponent},
  {path:'emps',component:EmployeeListComponent,children:[
    {path:'detail/:id',component:EmployeeDetailComponent}
  ]},
  {path:'flowers',pathMatch:'full',component:FlowersComponent},
  {path:'flowers/:id',component:FlowerDetailComponent},*/
  //{path:'login',component:LoginComponent}->inside user,
  /*{path:'',pathMatch:'full',component:AppComponent},
  {path:'**',component:PageNotFoundComponent}*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }