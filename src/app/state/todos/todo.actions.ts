import { createAction, props } from '@ngrx/store';
import { Todo } from 'src/app/todo/todo.model';


export const addTodo = createAction(
  '[Todo Page]  Add Todo',
   props<{content:string}>()
  
  );
  
  export const removeTodo = createAction(
    '[Todo Page] Remove Todo',
    props<{id:string}>()
  );
  
  
  export const loadTodos = createAction('[Todo Page] Load Todos');
  
  export const LoadTodoSuccess = createAction('[Todo API] Todo Load Success',
  props<{todos:Todo[]}>());
  
  export const LoadTodoFailure = createAction('[Todo API] Todo Load Failure',
  props<{error:string}>());