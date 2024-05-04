import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { useSelector } from "react-redux";
import TopUpButton from "../../components/TopUpButton/TopUpButton";
import Button from "../../components/Button/Button";
import PaymentConfirmationCoinModal from "../../components/Modal/PaymentConfirmationCoinModal/PaymentConfirmationCoinModal";
import QRModal from "../../components/Modal/QRModal/QRModal";

const TopUpPage = () => {
  const [amount, setAmount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [showQRModal, setShowQRModal] = useState(false);
  const handleBack = () => {
    window.history.back();
  };
  const { user } = useSelector((state: any) => state.auth);

  const handleAdd = (add: number) => {
    setAmount(amount + add);
  };

  const handleQR = () => {
    setShowQRModal(true);
  }

  return (
    <div>
      <Navbar />
      <div className="py-8 px-12 min-h-screen relative">
        <p
          onClick={handleBack}
          className="text-5d5d5d font-bold text-lg underline cursor-pointer"
        >
          Back to Previous Page
        </p>
        <div className="flex gap-8 mt-8">
          <div className="w-7/12 flex flex-col gap-12">
            <div className="bg-balance bg-fafafa p-9 rounded-2xl flex flex-col gap-6">
              <p className="text-ababab font-bold text-lg">Your Balance: </p>
              <div className="flex items-center gap-2">
                <p className="text-5d5d5d font-bold text-5xl">
                  {user.juiceCoin}
                </p>
                <img
                  src={require("../../assets/images/juiceCoin.png")}
                  alt="juiceCoin"
                />
              </div>
            </div>
            <div className="bg-fafafa p-9 rounded-2xl flex flex-col gap-6">
              <p className="text-5d5d5d font-bold text-4xl">Top Up</p>
              <div className="border-2 border-gray-600 p-6 rounded-2xl flex flex-col gap-10">
                <p className="text-232323 font-bold text-2xl">Amount</p>
                <div className="flex items-center justify-center gap-36">
                  <button className="text-10b981 text-3xl font-extrabold bg-e5e5e5 p-4 rounded-3xl w-16" onClick={() => setAmount(amount - 1)}>
                    -
                  </button>
                  <div className="flex items-center gap-2">
                    <p className="text-5d5d5d font-bold text-5xl">{amount}</p>
                    <img
                      src={require("../../assets/images/juiceCoin.png")}
                      alt="juiceCoin"
                    />
                  </div>
                  <button className="text-10b981 text-3xl font-extrabold bg-e5e5e5 p-4 rounded-3xl w-16" onClick={() => setAmount(amount + 1)}>
                    +
                  </button>
                </div>
                <div className="flex items-center justify-center gap-10 pb-10">
                  <TopUpButton onClick={() => handleAdd(5)}>5</TopUpButton>
                  <TopUpButton onClick={() => handleAdd(10)}>10</TopUpButton>
                  <TopUpButton onClick={() => handleAdd(25)}>25</TopUpButton>
                  <TopUpButton onClick={() => handleAdd(50)}>50</TopUpButton>
                  <TopUpButton onClick={() => handleAdd(100)}>100</TopUpButton>
                  <TopUpButton onClick={() => handleAdd(200)}>200</TopUpButton>
                </div>
              </div>
              <div className="border-2 border-gray-600 p-6 rounded-2xl flex flex-col gap-10">
                <p className="text-232323 font-bold text-2xl">Payment Method</p>
              </div>
            </div>
          </div>
          <div className="w-5/12 flex flex-col gap-8">
            <div className="bg-fafafa p-9 rounded-2xl flex flex-col">
              <p className="text-5d5d5d font-bold text-4xl mb-8">Details</p>
              <div className="text-5d5d5d font-semibold text-xl flex justify-between items-center mb-4">
                <p>Total Transactions</p>
                <p>Rp 0</p>
              </div>
              <div className="text-5d5d5d font-semibold text-xl flex justify-between items-center mb-4">
                <p>Tax</p>
                <p>Rp 1.000</p>
              </div>
              <hr className="border-2 border-gray-600" />
              <div className="text-5d5d5d font-semibold text-3xl flex my-7 justify-between items-center mb-4">
                <p>Total Bill</p>
                <p>Rp 1.000</p>
              </div>
              <Button className="bg-10b981 text-white font-semibold text-2xl py-4" onClick={setIsVisible}>
                Pay
              </Button>
            </div>
            <div className="bg-fafafa p-9 rounded-2xl flex flex-col">
              <p className="text-5d5d5d font-bold text-4xl mb-8">
                Transaction History
              </p>
            </div>
          </div>
        </div>
        <div className="circle"></div>
      </div>
      {isVisible ? (
        <PaymentConfirmationCoinModal isVisible={isVisible} setIsVisible={setIsVisible} handleqr={handleQR} amount={amount}/>
      ) : null}
      {showQRModal ? (
        <QRModal isVisible={showQRModal} setIsVisible={setShowQRModal} />
      ) : null}
    </div>
  );
};

export default TopUpPage;
