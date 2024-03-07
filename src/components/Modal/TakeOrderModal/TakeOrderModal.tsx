import React from "react";
import ModalIndex from "../ModalIndex/ModalIndex";
import { ITakeOrderModal } from "./ITakeOrderModal";

const TakeOrderModal = (props: ITakeOrderModal) => {
  const { isVisible, setIsVisible } = props;
  const handleModalClick = () => {
    setIsVisible(false);
  };

  const handleStopPropagation = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };
  return (
    <ModalIndex onClick={handleModalClick}>
      <div onClick={handleStopPropagation}>
        <div>TEST</div>
      </div>
    </ModalIndex>
  );
};

export default TakeOrderModal;
