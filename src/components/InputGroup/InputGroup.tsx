import React from "react";
import Input from "./Input/Input";
import Label from "./Label/Label";
import { IInputGroup } from "./IInputGroup";

const InputGroup = (props: IInputGroup) => {
  const { id, children, placeholder, type = "text" } = props;
  return (
    <div className="flex flex-col mt-5 w-full">
      <Label htmlFor={id} children={children} />
      <Input id={id} placeholder={placeholder} type={type} />
    </div>
  );
};

export default InputGroup;
