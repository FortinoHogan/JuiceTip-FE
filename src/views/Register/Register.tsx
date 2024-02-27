import React, { useEffect, useState } from "react";
import InputGroup from "../../components/InputGroup/InputGroup";
import Anchor from "../../components/Anchor/Anchor";
import Button from "../../components/Button/Button";
import OTPModal from "../../components/Modal/OTPModal/OTPModal";
import axios from "axios";

const Register = () => {
  const [registerFailed, setRegisterFailed] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const [value, setValue] = useState({
    emailValue: "",
    firstname: "",
    lastname: "",
    address: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    checkbox: false,
  });
  const handleInput = (e: any) => {
    const newObj = { ...value, [e.target.id]: e.target.value };
    setValue(newObj);
  };

  const generateOTP = async (email: string, name: string) => {
    try {
      const response = await axios.post("https://localhost:7234/user/generate-otp", {
        email,
        name,
      });
      console.log("Response:", response.data);
    } catch (error: any) {
      console.log(error);
    }
  };

  const handleValidation = (e: any) => {
    e.preventDefault();
    if (value.checkbox === false) {
      setRegisterFailed("You must agree to the Terms and Conditions ");
    }
    if (value.password !== value.confirmPassword) {
      setRegisterFailed("Password and Confirm Password does not match");
    }
    if (value.password === "") {
      setRegisterFailed("Password is required");
    }
    if (value.phoneNumber === "") {
      setRegisterFailed("Phone Number is required");
    }
    if (value.address === "") {
      setRegisterFailed("Address is required");
    }
    if (value.lastname === "") {
      setRegisterFailed("Last Name is required");
    }
    if (value.firstname === "") {
      setRegisterFailed("First Name is required");
    }
    if (value.emailValue === "") {
      setRegisterFailed("Email is required");
    }
    if (
      value.emailValue &&
      value.password &&
      value.confirmPassword &&
      value.checkbox &&
      value.address &&
      value.lastname &&
      value.firstname &&
      value.phoneNumber
    ) {
      setRegisterFailed("");
      setIsVisible(true);
      generateOTP(value.emailValue, value.firstname);
    }
  };

  return (
    <div className="section mx-auto min-h-screen flex">
      <div className="bg-e5e5e5 min-h-screen w-1/2 flex flex-col items-center text-start justify-center">
        <form className="w-4/6 mb-10" onSubmit={handleValidation}>
          <h1 className="text-5d5d5d text-3xl font-bold pt-20 mb-3">
            Register JuiceTip
          </h1>
          <div className="flex">
            <p className="text-5d5d5d font-bold">
              Already have an account?&nbsp;
            </p>
            <Anchor
              children="Let's sign in!"
              variant="text-10b981 font-bold"
              href="/login"
            />
          </div>
          <hr className="h-1 mt-3 bg-gray-200 border-0 bg-bcbec0 rounded-sm" />
          <div className="flex flex-col items-center">
            <InputGroup
              id="emailValue"
              children="Email"
              placeholder="Insert Email ..."
              onChange={handleInput}
            />
            <InputGroup
              id="firstname"
              children="First Name"
              placeholder="Insert First Name ..."
              onChange={handleInput}
            />
            <InputGroup
              id="lastname"
              children="Last Name"
              placeholder="Insert Last Name ..."
              onChange={handleInput}
            />
            <InputGroup
              id="address"
              children="Address"
              placeholder="Insert Address ..."
              onChange={handleInput}
            />
            <InputGroup
              id="phoneNumber"
              children="Phone Number"
              placeholder="Insert Phone Number ..."
              onChange={handleInput}
            />
            <InputGroup
              id="password"
              children="Password"
              placeholder="Insert Password ..."
              type="password"
              onChange={handleInput}
            />
            <InputGroup
              id="confirmPassword"
              children="Confirm Password"
              placeholder="Insert Confirm Password ..."
              type="password"
              onChange={handleInput}
            />
            <div className="flex gap-4 mt-5">
              <input
                type="checkbox"
                id="checkbox"
                name="checkbox"
                onChange={handleInput}
              />
              <label
                htmlFor="checkbox"
                className="text-5d5d5d font-semibold text-md"
              >
                I agree to the terms and conditions as set out by the user
                agreement
              </label>
            </div>
            <Button
              variant="Register"
              className="mt-5 w-64 rounded-full text-2xl"
            />
            {registerFailed && (
              <p className="text-red-500 font-bold text-xl text-center">
                {registerFailed}
              </p>
            )}
          </div>
        </form>
      </div>
      <div className="w-1/2 flex flex-col items-center text-start justify-center">
        <Anchor
          children="Back to Homepage"
          variant="text-fafafa w-full text-right mr-24 font-bold underline mb-24"
          href="/"
        />
        <img
          src={require("../../assets/images/register_right.png")}
          alt="login_right"
          className="w-10/12"
        />
      </div>
      {isVisible ? <OTPModal isVisible={isVisible} /> : null}
    </div>
  );
};

export default Register;