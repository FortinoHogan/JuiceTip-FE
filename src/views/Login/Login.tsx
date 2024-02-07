import React from "react";
import InputGroup from "../../components/InputGroup/InputGroup";
import Anchor from "../../components/Anchor/Anchor";
import Button from "../../components/Button/Button";

const Login = () => {
  return (
    <div className="container mx-auto bg-black min-h-screen">
      <div className="bg-neutral-400 min-h-screen w-1/2">
        <h1 className="text-center text-3xl font-bold pt-20">Login</h1>
        <div className="flex flex-col items-center">
          <InputGroup id="email" children="Email" />
          <InputGroup id="password" children="Password" />
          <Button variant="Login">Login</Button>
          <Anchor
            children="Don't have an account? Register!"
            variant="text"
            href="/register"
          />
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Login;
