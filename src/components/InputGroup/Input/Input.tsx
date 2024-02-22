import React from "react";
import { IInput } from "./IInput";

const Input = (props: IInput) => {
  const { id, placeholder, type = "text" } = props;
  return (
    <div>
      <input
        type={type}
        id={id}
        className="mt-2 px-5 py-3 focus:outline-none rounded-lg text-gray-600 font-medium text-sm w-full"
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
