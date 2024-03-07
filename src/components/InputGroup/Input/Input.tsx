import React from "react";
import { IInput } from "./IInput";

const Input = (props: IInput) => {
  const { id, placeholder, type = "text", onChange, name } = props;

  return (
    <div>
      <input
        name={name}
        type={type}
        id={id}
        className="mt-2 px-5 py-3 focus:outline-none rounded-lg text-gray-600 font-medium text-sm w-full"
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
