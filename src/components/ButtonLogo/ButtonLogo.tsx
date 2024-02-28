import React from "react";
import { Link } from "react-router-dom";
import { IButtonLogo } from "./IButtonLogo";
import Anchor from "../Anchor/Anchor";
const ButtonLogo = (props: IButtonLogo) => {
  const { href, src, title } = props;
  return (
    <Anchor href={`${href}`} variant="flex flex-col items-center mx-10">
          <img
          src={require(`../../assets/images/${src}`)}
          alt={`${title}`}
          className="button-logo p-12"
        />
        <p className="text-3xl text-10b981 font-medium">{title}</p>
    </Anchor>
  );
};

export default ButtonLogo;
