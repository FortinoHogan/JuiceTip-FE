import React from "react";
import { INotificationCard } from "./NotificationCard.interfaces";

const NotificationCard = (props: INotificationCard) => {
  const { notification } = props;
  const { seconds, nanoseconds } = notification.date;
  const date = new Date(seconds * 1000 + nanoseconds / 1000000);

  const formatDate = (date: any) => {
    const options = { month: 'long', year: 'numeric', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };

  const formatTime = (date: any) => {
    const options = { hour: 'numeric', minute: 'numeric', hour12: true };
    return date.toLocaleTimeString('en-US', options);
  };

  return (
    <div className="px-7 py-5 border-b-2 border-[#e5e5e5] text-lg cursor-pointer">
      <div className="flex items-center gap-5">
        <img src={require("../../assets/images/facebook.png")} alt="profile" className="w-12"/>
        <p className="text-5d5d5d">
          <span className="text-[#232323] font-medium">{notification.justiperName}</span> has accept your
          product offer. Please finished your payment to complete the
          transaction
        </p>
      </div>
      <div className="ml-[4.2rem] mt-1">
        <p className="text-[#232323] font-medium text-[0.95rem]">JuiceTip • {notification.productName}</p>
        <p className="text-[#8a8a8a]">{formatDate(date)} • {formatTime(date)}</p>
      </div>
    </div>
  );
};

export default NotificationCard;
