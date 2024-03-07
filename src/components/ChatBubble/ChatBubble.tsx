import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";
import TakeOrderModal from "../Modal/TakeOrderModal/TakeOrderModal";
import { IChatBubble } from "./IChatBubble";

const ChatBubble = (props: IChatBubble) => {
  const { setIsVisible } = props;
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/login");
  };

  const handleVisible = () => {
    setIsVisible(true);
  };
  const { isLoggedIn } = useSelector((state: RootState) => state.auth);
  return (
    <Button
      className="bg-10b981 fixed right-10 bottom-10 p-4 rounded-3xl"
      onClick={
        isLoggedIn ? (
          handleLogin
        ) : (
          handleVisible
        )
      }
    >
      <div className="gap-2 flex items-center justify-center">
        <img
          src={require("../../assets/images/bubbleChat.png")}
          alt="bubbleChat"
        />
        <p className="text-white text-xl">Chat</p>
      </div>
    </Button>
  );
};

export default ChatBubble;
