import React from "react";
import { Link } from "react-router-dom";

const Button = ({ variant, href, className, onClick }: any) => {
  if (href) {
    return (
      <Link to={href}>
        <button
          className={`${className} bg-10b981 text-white font-bold py-2 px-4 rounded m-4`}
          onClick={onClick}
        >
          {variant}
        </button>
      </Link>
    );
  } else {
    return (
      <button
        className={`${className} bg-10b981 text-white font-bold py-2 px-4 rounded m-4`}
        onClick={onClick}
      >
        {variant}
      </button>
    );
  }
};

export default Button;
