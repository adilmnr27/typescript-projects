import React, { Component } from "react";

interface ClassTemplateComponentProps {
  propsOptional?: string;
  propsRequired: string;
}

/* State interface is not required when we are using class component with constructor. 
The reason being that it is overriding the state variable in  this class*/

export class ClassTemplateComponentWithConstructor extends Component<
  ClassTemplateComponentProps
> {
  //We are overriding the state from parent class
  state = {
    stateRequired: "state_required",
  };
  render() {
    return (
      <div>
        State :- {this.state.stateRequired}
        Props :- {this.props.propsRequired} and {this.props.propsOptional}
      </div>
    );
  }
}

export default ClassTemplateComponentWithConstructor;
