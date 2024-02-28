import React from "react";
import Button from "../Button/Button";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-between py-6 px-20 drop-shadow-2xl shadow-2xl">
        <div className="w-1/5">
          <img
            src={require(`../../assets/images/logo.png`)}
            alt="logo"
            className="max-w-full max-h-full"
          />
        </div>
        <Button
          variant="Login"
          href="/login"
          className="rounded-full w-32 text-2xl font-medium"
        />
      </div>
    </>
  );
};

export default Navbar;
