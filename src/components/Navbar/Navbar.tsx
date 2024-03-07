import React from "react";
import Button from "../Button/Button";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import Anchor from "../Anchor/Anchor";

const Navbar = () => {
  const { isLoggedIn, user } = useSelector((state: RootState) => state.auth);
  return (
    <>
      <nav className="bg-fafafa flex justify-between py-6 px-20 drop-shadow-2xl shadow-2xl">
        <div className="w-1/5">
          <img
            src={require("../../assets/images/logo.png")}
            alt="logo"
            className="max-w-full max-h-full"
          />
        </div>
        {isLoggedIn && user ? (
          <div className="flex items-center gap-6">
            <div className="flex gap-4">
              <Anchor href="/shoppingCart">
                <img
                  src={require("../../assets/images/shoppingCart.png")}
                  alt="shoppingCart"
                />
              </Anchor>
              <Anchor href="/notification">
                <img
                  src={require("../../assets/images/notification.png")}
                  alt="notification"
                />
              </Anchor>
            </div>
            <div className="flex items-center gap-1">
              <p className="font-extrabold text-2xl">130</p>
              <img
                src={require("../../assets/images/juiceCoin.png")}
                alt="juiceCoin"
              />
            </div>
            <div>
              <Anchor href="/profile" variant="flex items-center gap-4">
                <img
                  src={require("../../assets/images/facebook.png")}
                  alt="profile"
                />
                <p className="font-semibold text-3xl hover:underline">
                  {user.firstName}
                </p>
              </Anchor>
            </div>
          </div>
        ) : (
          <Button
            children="Login"
            href="/login"
            className="rounded-full w-32 text-2xl font-medium bg-10b981 text-white"
          />
        )}
      </nav>
    </>
  );
};

export default Navbar;
