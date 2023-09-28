import { createFeatureSelector, createSelector } from "@ngrx/store";
import { TodoState } from "./todos.state";

//first get the reference of feature selector
export const todosDataState =
createFeatureSelector<TodoState>('todos');

//use that feature selector to get the selector 
export const getTodos = createSelector(todosDataState,state=>state.todos);