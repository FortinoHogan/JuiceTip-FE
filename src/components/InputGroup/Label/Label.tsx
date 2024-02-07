import React from "react";
import { ILabel } from "./ILabel";

const Label = (props: ILabel) => {
  const { htmlFor, children } = props;
  return (
    <div>
      <label htmlFor={htmlFor} className="text-gray-600 font-medium text-sm">
        {children}
      </label>
    </div>
  );
};

export default Label;
