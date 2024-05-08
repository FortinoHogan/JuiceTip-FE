import React from "react";
import { IPaymentConfirmationProductModal } from "./IPaymentConfirmationProduct";
import ModalIndex from "../ModalIndex/ModalIndex";
import Button from "../../Button/Button";

const PaymentConfirmationProductModal = (
  props: IPaymentConfirmationProductModal
) => {
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
        <div className="bg-fafafa rounded-xl flex flex-col items-center justify-center py-14 px-32 gap-5">
          <h1 className="text-3xl text-5d5d5d font-bold">
            Payment Confirmation
          </h1>
          <img
            src={require("../../../assets/images/paymentConfirmationProduct.png")}
            alt="paymentConfirmationProduct"
          />
          <p className="text-5d5d5d text-xl my-5 font-medium">
            Are you sure to make a payment?
          </p>
          <div className="flex items-center justify-center gap-5 text-xl w-full">
            <Button
              className="border border-[#10b981] text-10b981 w-1/2 font-medium"
              onClick={handleModalClick}
            >
              No
            </Button>
            <Button className="bg-10b981 text-white w-1/2 font-medium">Yes</Button>
          </div>
        </div>
      </div>
    </ModalIndex>
  );
};

export default PaymentConfirmationProductModal;