import React from "react";
import Input from "./Input/Input";
import Label from "./Label/Label";
import { IInputGroup } from "./IInputGroup";

const InputGroup = (props: IInputGroup) => {
  const { id, children } = props;
  return (
    <div className="flex flex-col">
      <Label htmlFor={id} children={children} />
      <Input id={id} />
    </div>
  );
};

export default InputGroup;
