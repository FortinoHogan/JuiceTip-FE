import React from "react";
import Button from "../../components/Button/Button";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import ChatCard from "../../components/ChatCard/ChatCard";
import ChatBubble from "../../components/ChatBubble/ChatBubble";

const ChatPage = () => {
  const { user } = useSelector((state: RootState) => state.auth);

  console.log(user);

  const handleBack = () => {
    window.history.back();
  };
  return (
    <div className="flex">
      <div className="w-1/3">
        <div className="bg-e5e5e5 h-32 py-5 px-8 flex items-center justify-between">
          <Button onClick={handleBack}>
            <span id="triangle" />
          </Button>
          <div className="flex items-center gap-5">
            <p className="text-5d5d5d text-3xl font-bold">{user.firstName}</p>
            <img src={require("../../assets/images/facebook.png")} alt="logo" />
            <span id="three-dot">
              <li></li>
              <li></li>
              <li></li>
            </span>
          </div>
        </div>
        <div className="bg-fafafa min-h-screen">
          <ChatCard />
        </div>
      </div>
      <span className="bg-d1d1d1 w-2"></span>
      <div className="w-2/3">
        <div className="bg-e5e5e5 h-32 flex items-center">
          <p className="text-5d5d5d font-bold text-xl pl-24">
            Mr. Steve Unsworth
          </p>
        </div>
        <div className="bg-wallpaper bg-cover min-h-screen">
          <ChatBubble />
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
