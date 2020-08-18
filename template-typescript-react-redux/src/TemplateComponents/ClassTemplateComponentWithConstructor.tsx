import React, { Component } from "react";

interface ClassTemplateComponentWithConstructorProps {
  propsOptional?: string;
  propsRequired: string;
}

/* State interface is required when we are using class component with constructor. 
The reason being that it is referring the state from the parent component and reassigning it here*/
interface ClassTemplateComponentWithConstructorState {
  stateOptional?: string;
  stateRequired: string;
}
export class ClassTemplateComponentWithConstructor extends Component<
  ClassTemplateComponentWithConstructorProps,
  ClassTemplateComponentWithConstructorState
> {
  constructor(props: ClassTemplateComponentWithConstructorProps) {
    super(props);
    this.state = {
      stateRequired: "state_required",
    };
  }

  render() {
    return (
      <div>
        State :- {this.state.stateRequired} and {this.state.stateOptional}
        Props :- {this.props.propsRequired} and {this.props.propsOptional}
      </div>
    );
  }
}

export default ClassTemplateComponentWithConstructor;
