import { combineReducers } from "redux";
import { todoReducer } from "./reducers/reducer";
import { ITodo } from "./actions/action";
/*Important concept:- the attribute naming should be like todos and not as todosReducer as it will represnt the state object*/

/*Entire state of the redux store by IStoreState
It is essentially a living document
*/

export interface IStoreState {
  todos: ITodo[];
}

//and we will pass this IStoreState to combine reducer
export const reducers = combineReducers<IStoreState>({
  todos: todoReducer,
});

//For each reducer passed like todoReducer it will check if its return type complies with IStoreState

//so essentially it would be like todos : returnof(todoReducer) should match the IStoreState
