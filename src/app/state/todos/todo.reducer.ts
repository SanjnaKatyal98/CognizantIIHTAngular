import {
  addTodo,
  removeTodo,
  loadTodos,
  LoadTodoSuccess,
  LoadTodoFailure,
} from './todo.actions';

import { createReducer, on } from '@ngrx/store';
import { Todo } from 'src/app/todo/todo.model';
import { initialState } from './todos.state';

// export  interface TodoState{
//   todos:Todo[];
//   error:string;
//   status:'pending' | 'loading' | 'error' |'success';
// }


// export const initialState :TodoState = {

//    todos:[],
//    error:'',
//    status:'pending'

// }

export const todoReducer = createReducer(
  initialState,
  on(addTodo,(state,{content})=>({
      ...state,
      todos:[...state.todos,{id:Date.now().toString(),content:content}],
  })),
  
  on(removeTodo,(state,{id})=>({
    ...state,
    todos:state.todos.filter((todo)=>todo.id !== id),
  })),
  
  on(loadTodos,(state)=>({
    ...state,
    status:'loading'
  })),
  
  on(LoadTodoSuccess,(state , {todos})=>({
    ...state,
    todos,
    error:'',
    status:'success'
  })) ,
  
  on(LoadTodoFailure,(state,{error})=>({
  ...state,
  error:error,
  status:'error'
  }))
);