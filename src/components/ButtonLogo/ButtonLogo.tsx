import React from "react";
import { Link } from "react-router-dom";
import { IButtonLogo } from "./IButtonLogo";
const ButtonLogo = (props: IButtonLogo) => {
  const { href, src, title } = props;
  return (
    <>
      <Link to={`/`}>
        <img src={require(`${src}`)} alt="buttonLogo" />
        <p>{title}</p>
      </Link>
    </>
  );
};

export default ButtonLogo;
