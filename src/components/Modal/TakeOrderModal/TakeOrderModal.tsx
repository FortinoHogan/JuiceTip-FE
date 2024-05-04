import React from "react";
import ModalIndex from "../ModalIndex/ModalIndex";
import { ITakeOrderModal } from "./ITakeOrderModal";
import Button from "../../Button/Button";

const TakeOrderModal = (props: ITakeOrderModal) => {
  const { isVisible, setIsVisible, product } = props;
  const handleModalClick = () => {
    setIsVisible(false);
  };

  const handleStopPropagation = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };
  return (
    <ModalIndex onClick={handleModalClick}>
      <div onClick={handleStopPropagation}>
        <div className="bg-fafafa rounded-xl flex flex-col items-center justify-center py-14 px-32 gap-7">
          <h1 className="text-4xl text-5d5d5d font-bold">
            Take Order Confirmation
          </h1>
          <img
            src={product.productImageList[0]}
            alt="productImage"
            className="product-card-logo w-56 h-56"
          />
          <div className="flex text-xl font-medium text-5d5d5d">
            You taking order
            <p className="font-bold">&nbsp;{product.productName}&nbsp;</p>for
            <p className="text-black font-bold">
              &nbsp;{product.customerName}&nbsp;
            </p>
          </div>
          <div className="flex justify-between items-center w-full px-5 py-6 bg-e5e5e5 rounded-lg">
            <p className="text-5d5d5d font-semibold text-xl">Product Price :</p>
            <div className="font-extrabold text-3xl flex items-center">
              {product.productPrice}
              <img
                src={require("../../../assets/images/juiceCoin.png")}
                alt="juiceCoin"
                className="w-8 h-8"
              />
            </div>
          </div>
          <div className="w-full">
            <Button className="bg-10b981 w-full text-2xl font-medium py-2 rounded-lg text-white">Confirm</Button>
            <Button className="w-full text-2xl font-medium py-2 rounded-lg text-10b981" onClick={handleModalClick}>Cancel</Button>
          </div>
        </div>
      </div>
    </ModalIndex>
  );
};

export default TakeOrderModal;
