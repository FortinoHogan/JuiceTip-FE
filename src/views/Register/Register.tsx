import React from "react";
import InputGroup from "../../components/InputGroup/InputGroup";
import Anchor from "../../components/Anchor/Anchor";
import Button from "../../components/Button/Button";

const Register = () => {
  return (
    <div className="section mx-auto min-h-screen flex">
      <div className="bg-e5e5e5 min-h-screen w-1/2 flex flex-col items-center text-start justify-center">
        <div className="w-4/6 mb-10">
          <h1 className="text-5d5d5d text-3xl font-bold pt-20 mb-3">
            Register JuiceTip
          </h1>
          <Anchor
            children="Already have an account? "
            variant="text-5d5d5d font-bold"
            href="/register"
          />
          <Anchor
            children="Let's sign in!"
            variant="text-10b981 font-bold"
            href="/login"
          />
          <hr className="h-1 mt-3 bg-gray-200 border-0 bg-bcbec0 rounded-sm" />
          <div className="flex flex-col items-center">
            <InputGroup
              id="email"
              children="Email"
              placeholder="Insert Email..."
            />
            <InputGroup
              id="firstname"
              children="First Name"
              placeholder="Insert First Name..."
            />
            <InputGroup
              id="lastname"
              children="Last Name"
              placeholder="Insert Last Name..."
            />
            <InputGroup
              id="address"
              children="Address"
              placeholder="Insert Address..."
            />
            <InputGroup
              id="telephone"
              children="Phone Number"
              placeholder="Insert Phone Number..."
            />
            <InputGroup
              id="password"
              children="Password"
              placeholder="Insert Password..."
            />
            <InputGroup
              id="password"
              children="Password"
              placeholder="Insert Confirm Password..."
            />
            <div className="flex gap-4 mt-5">
              <input type="checkbox" id="checkbox" name="checkbox" />
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
              href="/"
              className="mt-5 w-64 rounded-full text-2xl"
            />
          </div>
        </div>
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
    </div>
  );
};

export default Register;
