import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { PenthouseComponent } from './penthouse/penthouse.component';
import { FlatlistComponent } from './flatlist/flatlist.component';
import { AnimalListComponent } from './animal-list/animal-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { PipesComponent } from './pipes/pipes.component';
import { StarComponent } from './star/star.component';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';
import { CComponent } from './c/c.component';
//import { CartComponent } from './cart/cart.component';
import { TransformDataPipe } from './transform-data.pipe';
import { RepeatDataPipe } from './repeat-data.pipe';
import { ProductsComponent } from './products/products.component';
import { HttpClientModule } from '@angular/common/http';
import { HomepageComponent } from './homepage/homepage.component';
import { EventsListComponent } from './events-list/events-list.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
//import { DBService } from 'shared/inmemoryeventdbservice';
import { TemplateFormsComponent } from './template-forms/template-forms.component';
import { TemplateForms1Component } from './template-forms1/template-forms1.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { GetValidatorsDirective } from './template-forms/get-validators.directive';
import { NavbarComponent } from './navbar/navbar.component';
import { BooksComponent } from './books/books.component';
import { EmpArrayFormComponent } from './emp-array-form/emp-array-form.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { EmployeeListComponent } from './employee/employee-list.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { FlowersComponent } from './flowers/flowers.component';
import { FlowerDetailComponent } from './flower-detail/flower-detail.component';
//import { LoginComponent } from './user/login.component';
import { LoginComponent } from './login/login.component';
import { GreetingComponent } from './greeting/greeting.component';
import { ShellCompComponent } from './shell-comp/shell-comp.component';
import { MenuComponent } from './menu/menu.component';
import { TodoModule } from "./todo/todo.module";
import { TodoPageComponent } from './todo/todo-page.component';
//import { ProductlistComponent } from './newproducts/productlist.component';

@NgModule({
    declarations: [
        AppComponent,
        WelcomeComponent,
        PenthouseComponent,
        FlatlistComponent,
        AnimalListComponent,
        ProductListComponent,
        PipesComponent,
        StarComponent,
        AComponent,
        BComponent,
        CComponent,
        //CartComponent,
        TransformDataPipe,
        RepeatDataPipe,
        ProductsComponent,
        HomepageComponent,
        EventsListComponent,
        TemplateFormsComponent,
        TemplateForms1Component,
        ReactiveFormsComponent,
        GetValidatorsDirective,
        NavbarComponent,
        BooksComponent,
        EmpArrayFormComponent,
        PageNotFoundComponent,
        AboutUsComponent,
        EmployeeListComponent,
        EmployeeDetailComponent,
        FlowersComponent,
        FlowerDetailComponent,
        LoginComponent,
        GreetingComponent,
        ShellCompComponent,
        MenuComponent,
        TodoPageComponent,
//        ProductlistComponent
        //LoginComponent//->inside user
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule, CommonModule, ReactiveFormsModule, HttpClientModule,
      //  HttpClientInMemoryWebApiModule.forRoot(DBService),
        //TodoModule
    ]
})
export class AppModule { }
