import React, { useState } from "react";
import Button from "../Button/Button";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import Anchor from "../Anchor/Anchor";
import { useNavigate } from "react-router-dom";
import NotificationCard from "../NotificationCard/NotificationCard";

const Navbar = () => {
  const { isLoggedIn, user } = useSelector((state: RootState) => state.auth);
  const [showNotification, setShowNotification] = useState(false);
  const navigate = useNavigate();
  const handleHome = () => {
    navigate("/");
  };

  const handleTopup = () => {
    navigate("/top-up");
  };
  return (
    <>
      <nav className="bg-fafafa flex items-center justify-between py-6 px-20 drop-shadow-2xl shadow-2xl">
        <div className="w-1/5">
          <img
            src={require("../../assets/images/logo.png")}
            alt="logo"
            className="max-w-full max-h-full cursor-pointer"
            onClick={handleHome}
          />
        </div>
        {isLoggedIn && user ? (
          <div className="flex items-center">
            <div className="flex items-center">
              <Button className="px-0">
                <img
                  src={require("../../assets/images/shoppingCart.png")}
                  alt="shoppingCart"
                  className="max-lg:w-12 max-md:w-10"
                />
              </Button>
              <div className="relative">
                <Button className="px-0" onClick={() => setShowNotification(!showNotification)}>
                  <img
                    src={require("../../assets/images/notification.png")}
                    alt="notification"
                    className="max-lg:w-12 max-md:w-10"
                  />
                </Button>
                {showNotification && <div className="absolute w-[35rem] h-[35rem] bg-fafafa left-[-450%] shadow rounded-xl overflow-auto  scrollbar-hidden">
                  <div className="px-7 py-5 border-[#e5e5e5] border-b-2 sticky top-0  bg-fafafa">
                    <h1 className="text-3xl font-bold text-[#232323]">
                      Notification
                    </h1>
                  </div>
                  <div>
                    <NotificationCard />
                    <NotificationCard />
                    <NotificationCard />
                    <NotificationCard />
                    <NotificationCard />
                  </div>
                </div>}
              </div>
            </div>
            <div
              className="flex items-center gap-1 cursor-pointer mr-4 ml-2"
              onClick={handleTopup}
            >
              <p className="font-extrabold text-2xl">{user.juiceCoin}</p>
              <img
                src={require("../../assets/images/juiceCoin.png")}
                alt="juiceCoin"
                className="max-lg:w-12 max-md:w-10"
              />
            </div>
            <div>
              <Anchor href="/profile" variant="flex items-center gap-4">
                <img
                  src={
                    "https://drive.google.com/thumbnail?id=1dMD1BiZYot1AULu_eHrkx3hxrL0q2zIj&sz=w1000"
                  }
                  alt="profile"
                  className="w-16 h-16 rounded-full object-cover object-top max-lg:w-12 max-lg:h-12 max-md:w-10 max-md:h-10"
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
