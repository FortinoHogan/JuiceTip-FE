import React from "react";
import { IRatingModal } from "./IRatingModal";
import StarRating from "../../StarRating/StarRating";
import Button from "../../Button/Button";

const RatingModal = (props: IRatingModal) => {
  const { isVisible, setIsVisible } = props;
  const handleModalClick = () => {
    setIsVisible(false);
  };

  const handleStopPropagation = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };
  return (
    <div
      onClick={handleModalClick}
      className="fixed top-0 w-screen h-screen flex items-center justify-center"
    >
      <div
        onClick={handleStopPropagation}
        className="fixed bottom-0 bg-fafafa p-5 rounded-xl w-[900px] gap-10 shadow-xl"
      >
        <div className="flex items-center gap-4">
          <img
            src="https://drive.google.com/thumbnail?id=1dMD1BiZYot1AULu_eHrkx3hxrL0q2zIj&sz=w1000"
            alt="profile"
            className="w-16 h-16 rounded-full object-cover object-top"
          />
          <div>
            <p className="text-8c8c8c font-bold text-xl">Reynaldi Hogan</p>
            <p className="text-[#A2A2A2] font-semibold">
              from Lapis Talas Bogor's Transaction
            </p>
          </div>
          <div className="close" onClick={handleModalClick}></div>
        </div>
        <div className="absolute left-0 mt-5 w-full border-b-[3px]" />
        <div className="flex flex-col justify-center items-center text-center mt-10 gap-4">
            <p className="text-black font-bold text-lg">Let’s rate your Justiper</p>
            <StarRating />
        </div>
        <div className="absolute left-0 mt-5 w-full border-b-[3px]" />
        <div className="flex flex-col justify-center items-center text-center mt-10 gap-4">
            <p className="text-black font-bold text-lg">Give some comment about your Justiper</p>
            <textarea className="w-full focus:outline-none resize-none bg-[#ebebeb] rounded-lg min-h-32 p-3" placeholder="Justiper is Good!"/>
            <Button className="bg-10b981 text-white font-medium w-full text-lg">
                Submit
            </Button>
        </div>
      </div>
    </div>
  );
};

export default RatingModal;
