import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import ProfileInfoGroup from "../../components/ProfileInfoGroup/ProfileInfoGroup";
import Button from "../../components/Button/Button";
import { LOGOUT } from "../../redux/slices/authSlice";
import { store } from "../../redux/store";

const ProfilePage = () => {
  const logout = () => {
    store.dispatch(LOGOUT());
    window.location.href = "/";
  };
  return (
    <div className="bg-e5e5e5 -z-50 absolute w-full">
      <Navbar />
      <div className="flex flex-col items-center justify-center py-12 relative">
        <div className="bg-white py-5 rounded-3xl relative flex justify-center items-center w-70">
          <img
            src={require("../../assets/images/banner.png")}
            alt="banner"
            className="absolute top-5"
          />
          <div className="flex flex-col items-center justify-center mt-16 z-10">
            <img
              src={require("../../assets/images/facebook.png")}
              alt="profile"
              className="w-36 h-36"
            />
            <p className="text-5d5d5d text-xl font-bold">Steven Forsythia</p>
            <p className="text-10b981 text-xl font-bold mb-5">
              Join on <span>March 2024</span>
            </p>
          </div>
        </div>
        <div className="flex w-70 mt-8 gap-8">
          <div className="w-7/12 rounded-3xl bg-white px-8 py-10">
            <h1 className="text-5d5d5d text-5xl font-bold mb-10">
              Information
            </h1>
            <ProfileInfoGroup title="Full Name" text="Steven Forsythia" />
            <ProfileInfoGroup title="Gender" text="Male" />
            <ProfileInfoGroup title="Age" text="18 years old" />
            <ProfileInfoGroup title="Email" text="steven107@binus.ac.id" />
            <ProfileInfoGroup title="Phone Number" text="+62 881025599917" />
            <ProfileInfoGroup title="Join" text="29 March 2024" />
            <Button
              href="/ChangePassword"
              children="Change Password"
              className="w-full bg-10b981 text-white font-bold mx-0 rounded-lg"
            />
            <Button
              onClick={logout}
              children="Logout"
              className="w-full bg-e5e5e5 mx-0 text-5d5d5d rounded-lg"
            />
          </div>
          <div className="w-5/12 rounded-3xl bg-white flex flex-col items-center justify-center gap-2">
            <h1 className="text-5d5d5d text-4xl font-bold mb-10">
              Rating Achievement
            </h1>
            <p className="text-5d5d5d text-9xl font-bold my-0">4.5</p>
            <div className="flex mb-5">
              <div className="star"></div>
              <div className="star"></div>
              <div className="star"></div>
              <div className="star"></div>
              <div className="star"></div>
            </div>
            <p className="text-5d5d5d text-2xl font-bold">
              Professional Justipers
            </p>
          </div>
        </div>
        <div className="circle">
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
