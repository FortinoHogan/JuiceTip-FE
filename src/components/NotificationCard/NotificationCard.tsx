import React from "react";

const NotificationCard = () => {
  return (
    <div className="px-7 py-5 border-b-2 border-[#e5e5e5] text-lg cursor-pointer">
      <div className="flex items-center gap-5">
        <img src={require("../../assets/images/facebook.png")} alt="profile" className="w-12"/>
        <p className="text-5d5d5d">
          <span className="text-[#232323] font-medium">Mr. Steven</span> has accept your
          product offer. Please finished your payment to complete the
          transaction
        </p>
      </div>
      <div className="ml-[4.2rem] mt-1">
        <p className="text-[#232323] font-medium text-[0.95rem]">JuiceTip • Lapis Talas Bogor</p>
        <p className="text-[#8a8a8a]">10 March 2024 • 11:11 AM</p>
      </div>
    </div>
  );
};

export default NotificationCard;
