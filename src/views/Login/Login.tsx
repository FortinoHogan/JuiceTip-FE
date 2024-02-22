import React from "react";
import InputGroup from "../../components/InputGroup/InputGroup";
import Anchor from "../../components/Anchor/Anchor";
import Button from "../../components/Button/Button";

const Login = () => {
  return (
    <div className="section mx-auto min-h-screen flex">
      <div className="bg-e5e5e5 min-h-screen w-1/2 flex flex-col items-center text-start justify-center">
        <div className="w-3/5">
          <h1 className="text-5d5d5d text-3xl font-bold pt-20 mb-3">
            Login JuiceTip
          </h1>
          <Anchor
            children="Doesn't have an account? "
            variant="text-5d5d5d font-bold"
            href="/register"
          />
          <Anchor
            children="Let's sign up!"
            variant="text-10b981 font-bold"
            href="/register"
          />
          <hr className="h-1 mt-3 mb-10 bg-gray-200 border-0 bg-bcbec0 rounded-sm" />
          <div className="flex flex-col items-center">
            <InputGroup
              id="email"
              children="Email"
              placeholder="Insert Email..."
            />
            <InputGroup
              id="password"
              children="Password"
              placeholder="Insert Password..."
            />
            <Button
              variant="Login"
              href="/"
              className="mt-16 w-64 rounded-full text-2xl"
            />
          </div>
        </div>
      </div>
      <div className="w-1/2 flex flex-col items-center text-start justify-center">
        <Anchor
          children="Back to Homepage"
          variant="text-fafafa w-full text-right mr-24 font-semibold underline"
          href="/"
        />
        <img
          src={require("../../assets/images/login_right.png")}
          alt="login_right"
          className="w-10/12"
        />
      </div>
    </div>
  );
};

export default Login;
