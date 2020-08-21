import { ITodo } from "../actions/action";
import { ActionTypes, Action } from "../actions/types";
//state: ITodo[] = [] meaning state is of type ITodo and if not passed assign an empty array

export function todoReducer(state: ITodo[] = [], action: Action) {
  switch (action.type) {
    case ActionTypes.fetchTodos:
      return action.payload;
    case ActionTypes.deleteTodo:
      return state.filter((todo: ITodo) => {
        return todo.id !== action.payload;
      });
    default:
      return state;
  }
}
