import React from "react";
import Button from "../Button/Button";

const BackButton = () => {
  const handleBack = () => {
    window.history.back();
  };
  return (
    <Button className="absolute top-44 left-12" onClick={handleBack}>
      <img
        src={require("../../assets/images/backButton.png")}
        alt="backButton"
      />
    </Button>
  );
};

export default BackButton;
