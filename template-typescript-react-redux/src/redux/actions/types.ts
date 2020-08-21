import { IDeleteTodo, FetchTodosInterface } from "./action";

export enum ActionTypes {
  fetchTodos,
  deleteTodo,
}

export type Action = IDeleteTodo | FetchTodosInterface;
