import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, tap, throwError } from "rxjs";
import { Todo } from "src/app/todo/todo.model";

@Injectable({
    providedIn:'root'
})
export class TodoService{
    constructor(private http:HttpClient){}
    public url='/api/todos/';
    
    getTodos():Observable<Todo[]>{
        return this.http.get<Todo[]>(this.url).pipe(
            tap(data=>console.log(JSON.stringify(data))),
            catchError(this.errorHandler)
           );
    }
    createTodo(todo:Todo):Observable<Todo>{
        const headers = new HttpHeaders({'Content-type':'application/json'});
      
       return this.http.post<Todo>(this.url,todo,{headers})
       .pipe(tap(data=>console.log(data)),
       catchError(this.errorHandler));
      
      }
      
      private errorHandler(err:any){
        let errorMessage :string;
        if(err.error instanceof ErrorEvent){
          errorMessage=`An error occured ${err.error.message}`;
        }
        else{
          errorMessage=`Backend returned code ${err.status} ${err.body.error}`;
        }
        console.log(err);
        return throwError(errorMessage);
      }
}