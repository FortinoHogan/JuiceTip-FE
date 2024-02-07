import React from "react";
import { Link } from "react-router-dom";
import { IAnchor } from "./IAnchor";

const Anchor = (props: IAnchor) => {
  const { children, variant, href } = props;
  return <Link to={href} className={variant}>{children}</Link>;
};

export default Anchor;
