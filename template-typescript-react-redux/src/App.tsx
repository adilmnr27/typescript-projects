import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ClassTemplateComponentWithConstructor from "./TemplateComponents/ClassTemplateComponentWithConstructor";
import FunctionalTemplateComponent from "./TemplateComponents/FunctionalTemplateComponent";
import { ITodo, fetchTodos, deleteTodo } from "./redux/actions/action";

//to connect mapstate to props importing connect from react-redux
import { connect } from "react-redux";
import { IStoreState } from "./redux/rootReducer";
interface AppProps {
  todos: ITodo[];
  fetchTodos: Function; //only a work around. Or it will give error in connect functionin type defination files
  deleteTodo: typeof deleteTodo;
}
function _App(props: AppProps) {
  // React.useEffect(() => {
  //   function fetchTodo() {
  //     fetchTodos().then((data: any) => {
  //       console.log(data.payload);
  //     });
  //   }
  //   fetchTodo();
  // }, []);

  function onClickHandler(): void {
    props.fetchTodos(); //after todos are fetched and stored in store, map state to props will pick up from there
  }

  const onDeleteTodoClick = (id: number): void => {
    props.deleteTodo(id);
  };
  const renderList = (): JSX.Element[] => {
    return props.todos.map((ele: ITodo) => {
      return (
        <div onClick={() => onDeleteTodoClick(ele.id)} key={ele.id}>
          {ele.title}
        </div>
      );
    });
  };
  /*https://stackoverflow.com/questions/55840294/how-to-fix-missing-dependency-warning-when-using-useeffect-react-hook*/

  return (
    <div className="App">
      <button onClick={onClickHandler}>Fetch Todos</button>
      <div>{renderList()}</div>

      <h4>ClassTemplateComponentWithConstructor</h4>
      <ClassTemplateComponentWithConstructor propsRequired={"props_req"} />
      <h4>FunctionalTemplateComponentProps</h4>
      <FunctionalTemplateComponent
        propsRequired={"props_req"}
      ></FunctionalTemplateComponent>
    </div>
  );
}

/* destructuring done..The meaning is same as below function*/
const mapStateToProps = ({ todos }: IStoreState): { todos: ITodo[] } => {
  return {
    todos,
  };
};

/*
const mapStateToProps = (state: IStoreState): { todos: ITodo[] } => {
  return {
    todos: state.todos,
  };
};
*/

const mapDispatchToProps = {
  fetchTodos,
  deleteTodo,
};

//as we would be exporting the App Component wrapped with connect
export const App = connect(mapStateToProps, mapDispatchToProps)(_App);

/*
export const mapStateToProps = (state: IStoreState): { todos: ITodo[] } => {
  return {
    todos: state.todos,
  };
};
*/
