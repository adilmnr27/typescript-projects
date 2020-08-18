import React from "react";

interface FunctionalTemplateComponentProps {
  propsOptional?: string;
  propsRequired: string;
}

export default function FunctionalTemplateComponent(
  props: FunctionalTemplateComponentProps
): JSX.Element {
  return (
    <div>
      Props :- {props.propsRequired} and {props.propsOptional}
    </div>
  );
}
