import React, { useEffect, useRef, useState } from "react";
import { IChatBubble } from "./ChatBubble.interfaces";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import Button from "../Button/Button";
import ChangePriceModal from "../Modal/ChangePriceModal/ChangePriceModal";

const ChatBubble = (props: IChatBubble) => {
  const [showChangePrice, setShowChangePrice] = useState(false);
  const {
    message,
    date,
    id,
    senderId,
    isBargain,
    image,
    productPrice,
    productName,
    bargainPrice,
  } = props;
  const { user } = useSelector((state: RootState) => state.auth);

  const isSender = user.userId === senderId;

  const ref = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message, date]);

  const formatTime = () => {
    const milliseconds = date.seconds * 1000 + date.nanoseconds / 1000000;
    const currDate = new Date(milliseconds);

    const hours = currDate.getHours().toString().padStart(2, "0");
    const minutes = currDate.getMinutes().toString().padStart(2, "0");

    return `${hours}:${minutes}`;
  };

  return (
    <>
      {!isBargain ? (
        <div
          ref={ref}
          className={`flex ${
            isSender ? "justify-end" : "justify-start"
          } px-5 mb-5`}
        >
          <span
            className={`rounded-md px-5 py-2 text-[#5D5D5D] ${
              isSender ? "bg-[#D9FDD3]" : "bg-[#fafafa]"
            }`}
          >
            <div className="text-lg pr-14">{message}</div>
            <div className="text-xs flex justify-end opacity-60">
              {formatTime()}
            </div>
          </span>
        </div>
      ) : (
        <div
          ref={ref}
          className={`flex ${
            isSender ? "justify-end" : "justify-start"
          } px-5 mb-5`}
        >
          <span
            className={`rounded-md px-5 py-2 text-[#5D5D5D] ${
              isSender ? "bg-[#D9FDD3]" : "bg-[#fafafa]"
            }`}
          >
            <div
              className={`w-full h-max my-2 rounded-md ${
                isSender ? "bg-[#C6EFBF]" : "bg-[#F4F4F4]"
              }`}
            >
              <div className="flex p-5 gap-5">
                <div className="h-36 w-36">
                  <img
                    src={
                      image ? image : require("../../assets/images/logo.png")
                    }
                    alt="logo"
                    className="w-full h-full object-cover product-card-logo"
                  />
                </div>
                <div>
                  <p className="text-2xl font-bold text-[#10B981]">
                    {productName}
                  </p>
                  <div className="flex mt-5 gap-5">
                    <div className="flex items-center opacity-50 relative">
                      <div className="w-full h-0.5 bg-black absolute"></div>
                      <p className="text-3xl font-extrabold">{productPrice}</p>
                      <img
                        src={require("../../assets/images/juiceCoin.png")}
                        alt="juiceCoin"
                        className="w-8"
                      />
                    </div>
                    <div className="flex items-center">
                      <p className="text-3xl font-extrabold">{bargainPrice}</p>
                      <img
                        src={require("../../assets/images/juiceCoin.png")}
                        alt="juiceCoin"
                        className="w-8"
                      />
                    </div>
                  </div>
                </div>
              </div>
              {!isSender && (
                <div className="px-5">
                  <hr className="h-0.5 bg-black opacity-50" />
                  <div className="flex gap-2 py-2">
                    <Button className="bg-10b981 h-full text-white font-medium text-xl w-1/2">
                      No
                    </Button>
                    <Button
                      className="bg-10b981 text-white font-medium text-xl w-1/2"
                      onClick={() => setShowChangePrice(true)}
                    >
                      Yes
                    </Button>
                  </div>
                </div>
              )}
            </div>
            <div className="text-lg pr-14">{message}</div>
            <div className="text-xs flex justify-end opacity-60">
              {formatTime()}
            </div>
          </span>
        </div>
      )}
      {showChangePrice && (
        <ChangePriceModal
          isVisible={showChangePrice}
          setIsVisible={setShowChangePrice}
          productPrice={productPrice}
          bargainPrice={bargainPrice}
        />
      )}
    </>
  );
};

export default ChatBubble;
