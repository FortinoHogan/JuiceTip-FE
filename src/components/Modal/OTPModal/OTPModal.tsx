import React, { useState } from "react";
import { IOTPModal } from "./IOTPModal";
import Button from "../../Button/Button";
import axios from "axios";
import ModalIndex from "../ModalIndex/ModalIndex";

const OTPModal = (props: IOTPModal) => {
  const { isVisible, setIsVisible, value } = props;
  const [otpValues, setOtpValues] = useState<string[]>([
    "",
    "",
    "",
    "",
    "",
    "",
  ]);
  const [error, setError] = useState<string>("");
  const [currentPage, setCurrentPage] = useState("modal-1");

  const register = async (
    email: string,
    password: string,
    firstName: string,
    lastName: string,
    address: string,
    telephone: string,
    otp: string
  ) => {
    try {
      const response = await axios.post(
        "https://localhost:7234/user/register",
        {
          email,
          password,
          firstName,
          lastName,
          address,
          telephone,
          otp,
        }
      );
      setCurrentPage(`page-${parseInt(currentPage.split("-")[1]) + 1}`);
    } catch (error: any) {
      setError(error.response.data);
    }
  };

  const handleChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = e.target;
    if (/^\d*$/.test(value)) {
      const newOtpValues = [...otpValues];
      newOtpValues[index] = value;
      setOtpValues(newOtpValues);

      if (value !== "") {
        if (index < otpValues.length - 1) {
          document.getElementById(`otp-input${index + 1}`)?.focus();
        }
      } else {
        if (index > 0) {
          document.getElementById(`otp-input${index - 1}`)?.focus();
        }
      }
    }
  };

  const handleModalClick = () => {
    setIsVisible(false);
  };

  const handleStopPropagation = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return (
    <ModalIndex onClick={handleModalClick}>
      {currentPage === "modal-1" && (
        <div id="modal-1" className="w-screen flex items-center justify-center">
          <div
            className={
              isVisible
                ? "bg-fafafa h-fit visible pt-14 pb-10 px-10 rounded-2xl overflow-hidden flex flex-col items-center justify-center modal-size"
                : "hidden"
            }
            onClick={handleStopPropagation}
          >
            <h1 className="text-3xl font-bold">OTP Verification</h1>
            <p className="text-xl mt-1">Your code was sent via email</p>
            <div className="mt-3">
              {[0, 1, 2, 3, 4, 5].map((index) => (
                <input
                  key={index}
                  type="text"
                  maxLength={1}
                  className="otp-input"
                  value={otpValues[index]}
                  onChange={(e) => handleChange(index, e)}
                  id={`otp-input${index}`}
                />
              ))}
            </div>
            <a href="" className="text-10b981 text-lg font-semibold">
              Resend OTP
            </a>
            <div className="relative flex flex-col items-center">
              <Button
                children="Submit"
                className="w-64 rounded-full font-medium text-xl bg-10b981 text-white"
                onClick={() =>
                  register(
                    value.emailValue,
                    value.password,
                    value.firstname,
                    value.lastname,
                    value.address,
                    value.phoneNumber,
                    otpValues.join("")
                  )
                }
              />
              {error && (
                <p className="text-red-500 font-bold text-xl">{error}</p>
              )}
            </div>
          </div>
        </div>
      )}
      {currentPage === "modal-2" && (
        <div id="modal-2" className="w-screen flex items-center justify-center">
          <div
            className={
              isVisible
                ? "bg-fafafa h-fit visible pt-14 pb-10 px-10 rounded-2xl overflow-hidden flex flex-col items-center justify-center modal-size"
                : "hidden"
            }
            onClick={handleStopPropagation}
          >
            <h1 className="text-3xl font-bold">Registration Success</h1>
            <p className="text-xl mt-1">Your account has been created</p>
            <img
              src={require("../../../assets/images/check_circle.png")}
              alt="check_circle"
              className="w-40 my-5"
            />
            <div className="relative flex flex-col items-center">
              <Button
                children="Home Page"
                className="w-64 rounded-full font-medium text-xl bg-10b981 text-white"
                onClick={() => (window.location.href = "/")}
              />
              {error && (
                <p className="text-red-500 font-bold text-xl">{error}</p>
              )}
            </div>
          </div>
        </div>
      )}
    </ModalIndex>
  );
};

export default OTPModal;
