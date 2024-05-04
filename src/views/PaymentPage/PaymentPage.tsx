import React, { useState } from "react";
import { IPaymentPage } from "./IPaymentPage";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import BackButton from "../../components/BackButton/BackButton";
import Button from "../../components/Button/Button";
import PaymentConfirmationProductModal from "../../components/Modal/PaymentConfirmationProductModal/PaymentConfirmationProductModal";

const PaymentPage = (props: IPaymentPage) => {
  const {} = props;
  const [isVisible, setIsVisible] = useState(false);
  const handleClick = () => {
    setIsVisible(true);
  };
  return (
    <div>
      <Navbar />
      <BackButton />
      <div className="bg-e5e5e5 flex items-center mt-5 flex-col gap-20 min-h-screen py-14">
        <h1 className="text-center text-10b981 font-bold text-5xl">PAYMENT</h1>
        <div className="my-7 bg-fafafa py-4 rounded-lg shadow-xl w-2/3 cursor-pointer flex flex-col items-center justify-center">
          <div className="flex w-full gap-3 items-center p-8">
            <img
              src={require("../../assets/images/location.png")}
              alt="location"
            />
            <div className="text-5d5d5d text-xl">
              <h1 className="font-bold">Delivery Address</h1>
              <p>Steven | (+62) 813-7961-0073</p>
              <p>
                Kyai Haji Syahdan Street, No. 38, RT.1/RW.6, South Sukabumi,
                Kebon Jeruk, West Jakarta City, DKI Jakarta, ID 11540
              </p>
            </div>
          </div>
          <img
            src={require("../../assets/images/bar.png")}
            alt="bar"
            className="w-full"
          />
          <div className="flex flex-col w-full p-10">
            <div className="border border-[#5d5d5d] rounded-md w-full p-5 relative">
              <div className="flex items-center gap-5">
                <img
                  src={require("../../assets/images/ohsnap_modal.png")}
                  alt="productImage"
                  className="product-card-logo w-56 h-56"
                />
                <div className="flex flex-col">
                  <h1 className="text-10b981 font-bold text-4xl">
                    Lapis Talas Bogor
                  </h1>
                  <h2 className="text-8c8c8c font-bold text-xl">Indonesia</h2>
                  <div className="flex py-2 px-4 items-center bg-e5e5e5 gap-3 rounded-md w-fit">
                    <img
                      src={require("../../assets/images/juiceCoin.png")}
                      alt="juiceCoin"
                      className="w-8"
                    />
                    <p className="text-8c8c8c font-bold text-xl">3</p>
                  </div>
                  <h2 className="text-8c8c8c font-bold text-xl">Category</h2>
                  <p className="text-8c8c8c text-xl">Food and Beverages</p>
                  <h2 className="text-8c8c8c font-bold text-xl">Notes</h2>
                  <p className="text-8c8c8c text-xl">Lapis talas rasa matcha</p>
                </div>
                <p className="absolute text-8c8c8c text-xl right-3 bottom-5">
                  1x
                </p>
              </div>
            </div>
            <div className="pt-6 flex justify-between items-center w-full">
              <p className="text-5d5d5d font-bold text-xl">
                Total Product (1 Product)
              </p>
              <div className="flex py-2 px-4 items-center bg-e5e5e5 gap-3 rounded-md w-fit">
                <img
                  src={require("../../assets/images/juiceCoin.png")}
                  alt="juiceCoin"
                  className="w-8"
                />
                <p className="text-8c8c8c font-bold text-2xl">3</p>
              </div>
            </div>
            <div className="border border-[#5d5d5d] text-5d5d5d rounded-md mt-6 p-2 relative w-full">
              <div className="flex items-center gap-3">
                <img
                  src={require("../../assets/images/paymentDetail.png")}
                  alt="paymentDetail"
                />
                <h1 className="font-bold text-2xl">Payment Details</h1>
              </div>
              <div className="flex items-center justify-between w-full border-b-2 border-[#5d5d5d] p-2 text-lg">
                <p className="text-xl font-semibold">Subtotal for Product</p>
                <div className="flex py-2 px-4 items-center gap-3 rounded-md w-fit">
                  <img
                    src={require("../../assets/images/juiceCoin.png")}
                    alt="juiceCoin"
                    className="w-8"
                  />
                  <p className="text-8c8c8c font-bold text-2xl">3</p>
                </div>
              </div>
              <div className="flex items-center justify-between w-full border-b-2 border-[#5d5d5d] p-2 text-lg">
                <p className="text-xl font-semibold">Subtotal for Delivery</p>
                <div className="flex py-2 px-4 items-center gap-3 rounded-md w-fit">
                  <img
                    src={require("../../assets/images/juiceCoin.png")}
                    alt="juiceCoin"
                    className="w-8"
                  />
                  <p className="text-8c8c8c font-bold text-2xl">5</p>
                </div>
              </div>
              <div className="flex items-center justify-between w-full border-b-2 border-[#5d5d5d] p-2 text-lg">
                <p className="text-xl font-semibold">App Fee</p>
                <div className="flex py-2 px-4 items-center gap-3 rounded-md w-fit">
                  <img
                    src={require("../../assets/images/juiceCoin.png")}
                    alt="juiceCoin"
                    className="w-8"
                  />
                  <p className="text-8c8c8c font-bold text-2xl">1</p>
                </div>
              </div>
              <div className="flex items-center justify-between w-full px-2 pt-2 text-lg">
                <p className="text-xl font-extrabold">Subtotal for Product</p>
                <div className="flex py-2 px-4 items-center gap-3 rounded-md w-fit">
                  <img
                    src={require("../../assets/images/juiceCoin.png")}
                    alt="juiceCoin"
                    className="w-8"
                  />
                  <p className="text-8c8c8c font-bold text-2xl">9</p>
                </div>
              </div>
            </div>
            <Button
              className="bg-10b981 text-2xl font-medium w-fit mt-7 rounded-lg text-white self-center"
              onClick={handleClick}
            >
              Make Payment
            </Button>
          </div>
        </div>
      </div>
      <Footer />
      {isVisible && (
        <PaymentConfirmationProductModal
          isVisible={isVisible}
          setIsVisible={setIsVisible}
        />
      )}
    </div>
  );
};

export default PaymentPage;
