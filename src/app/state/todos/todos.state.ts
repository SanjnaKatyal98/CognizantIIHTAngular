import { Todo } from "src/app/todo/todo.model";
import * as AppState from '../../state/app.state'

export interface State extends AppState.State {
    todos: TodoState;
  }
 
export interface TodoState{
    todos:Todo[],
    error:string,
    status:'pending'|'loading'|'success'|'error';
}

export const initialState:TodoState={
    todos:[],
    error:'',
    status:'pending'
}