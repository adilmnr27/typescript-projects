import axios from "axios";
import redux from "redux";
import { ActionTypes } from "./types";
const url = "https://jsonplaceholder.typicode.com/todos/";

export interface ITodo {
  id: number;
  title: string;
  completed: boolean;
}

//this interface is optional
export interface FetchTodosInterface {
  type: ActionTypes.fetchTodos;
  payload: ITodo[];
}

export interface IDeleteTodo {
  type: ActionTypes.deleteTodo;
  payload: number;
}

export const fetchTodos = () => {
  return async (dispatch: redux.Dispatch) => {
    const resp = await axios.get<ITodo[]>(url);
    return dispatch<FetchTodosInterface>({
      type: ActionTypes.fetchTodos,
      payload: resp.data,
    });
  };
};

export const deleteTodo = (id: number): IDeleteTodo => {
  return {
    type: ActionTypes.deleteTodo,
    payload: id,
  };
};
