import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ClassTemplateComponentWithConstructor from "./TemplateComponents/ClassTemplateComponentWithConstructor";
import FunctionalTemplateComponent from "./TemplateComponents/FunctionalTemplateComponent";
interface AppProps {
  header: string;
}
function App(props: AppProps) {
  return (
    <div className="App">
      <h4>ClassTemplateComponentWithConstructor</h4>
      <ClassTemplateComponentWithConstructor propsRequired={"props_req"} />
      <h4>FunctionalTemplateComponentProps</h4>
      <FunctionalTemplateComponent
        propsRequired={"props_req"}
      ></FunctionalTemplateComponent>
    </div>
  );
}

export default App;
