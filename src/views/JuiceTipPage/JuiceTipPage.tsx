import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import ChatBubble from "../../components/ChatBubble/ChatBubble";
import SearchBar from "../../components/SearchBar/SearchBar";
import BackButton from "../../components/BackButton/BackButton";
import ProductCard from "../../components/ProductCard/ProductCard";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";

const JuiceTipPage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/addProduct");
  };
  return (
    <div>
      <Navbar />
      <BackButton />
      <div className="bg-e5e5e5 min-h-screen py-14 flex flex-col items-center">
        <div className="flex items-center justify-evenly w-2/3">
          <div className="flex items-center justify-center gap-5">
            <img
              src={require("../../assets/images/juiceTip.png")}
              alt="juiceTip"
            />
            <h1 className="text-10b981 font-bold text-5xl">JuiceTip</h1>
          </div>
          <Button
            className="bg-10b981 text-white text-lg p-3 flex items-center justify-center gap-3 px-9"
            onClick={handleClick}
          >
            <div
              className="border-white border-2 rounded-full text-white text-2xl font-extrabold"
              style={{ width: "2.5rem", height: "2.5rem" }}
            >
              +
            </div>
            <p>Add New Product</p>
          </Button>
        </div>
        <SearchBar />
        <div className="flex gap-5 items-center justify-center w-2/3 my-7">
          {[1, 2, 3, 4, 5, 6, 7].map((index) => (
            <button
              className="bg-white border-black border-2 py-3 px-10 text-2xl rounded-full"
              key={index}
            >
              Temp
            </button>
          ))}
          <img
            src={require("../../assets/images/filterButton.png")}
            alt="filterButton"
            className="w-14"
          />
        </div>
        {[1, 2, 3, 4].map((index) => (
          <ProductCard key={index}></ProductCard>
        ))}
      </div>
      <ChatBubble setIsVisible={() => {}} />
      <Footer />
    </div>
  );
};

export default JuiceTipPage;
