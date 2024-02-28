import React, { useState } from "react";
import InputGroup from "../../components/InputGroup/InputGroup";
import Anchor from "../../components/Anchor/Anchor";
import Button from "../../components/Button/Button";
import axios from "axios";

const Login = () => {
  const [loginFailed, setLoginFailed] = useState("");
  const [value, setValue] = useState({
    email: "",
    password: "",
  });
  const handleInput = (e: any) => {
    const newObj = { ...value, [e.target.id]: e.target.value };
    setValue(newObj);
  };

  const handleValidation = (e: any) => {
    e.preventDefault();
    if (value.password === "") {
      setLoginFailed("Password is required");
    }
    if (value.email === "") {
      setLoginFailed("Email is required");
    }
    if (value.email && value.password) {
      setLoginFailed("");
    }
  };

  const login = async (email: string, password: string) => {
    try {
      const response = await axios.post("https://localhost:7234/user/login", {
        email,
        password,
      });
      if (response.data.payload === null) {
        setLoginFailed("Email/Password is wrong");
      } else {
        window.location.href = "/";
      }
    } catch (error: any) {
      console.log(error);
    }
  };

  return (
    <div className="section mx-auto min-h-screen flex">
      <div className="bg-e5e5e5 min-h-screen w-1/2 flex flex-col items-center text-start justify-center">
        <form className="w-3/5" onSubmit={handleValidation}>
          <h1 className="text-5d5d5d text-3xl font-bold pt-20 mb-3">
            Login JuiceTip
          </h1>
          <div className="flex">
            <p className="text-5d5d5d font-bold">
              Doesn't have an account?&nbsp;
            </p>
            <Anchor
              children="Let's sign up!"
              variant="text-10b981 font-bold"
              href="/register"
            />
          </div>
          <hr className="h-1 mt-3 mb-10 bg-gray-200 border-0 bg-bcbec0 rounded-sm" />
          <div className="flex flex-col items-center">
            <InputGroup
              id="email"
              children="Email"
              placeholder="Insert Email ..."
              onChange={handleInput}
            />
            <InputGroup
              id="password"
              children="Password"
              placeholder="Insert Password ..."
              type="password"
              onChange={handleInput}
            />
            <div className="relative flex justify-center">
              {loginFailed && (
                <p className="absolute text-red-500 mt-5 font-bold text-xl text-center">
                  {loginFailed}
                </p>
              )}
              <Button
                variant="Login"
                className="mt-16 w-64 rounded-full text-2xl"
                onClick={() => login(value.email, value.password)}
              />
            </div>
          </div>
        </form>
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
