import React from "react";
import InputGroup from "../../components/InputGroup/InputGroup";
import Anchor from "../../components/Anchor/Anchor";
import Button from "../../components/Button/Button";

const Register = () => {
  return (
    <div className="container mx-auto bg-black min-h-screen">
      <div className="bg-neutral-400 min-h-screen w-1/2">
        <h1 className="text-center text-3xl font-bold pt-20">Register</h1>
        <div className="flex flex-col items-center">
          <InputGroup id="email" children="Email" />
          <InputGroup id="firstname" children="First Name" />
          <InputGroup id="lastname" children="Last Name" />
          <InputGroup id="address" children="Address" />
          <InputGroup id="telephone" children="Telephone" />
          <InputGroup id="password" children="Password" />
          <Button variant="Register" href="/" />
          <Anchor
            children="Already have an account? Login!"
            variant="text"
            href="/login"
          />
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Register;
