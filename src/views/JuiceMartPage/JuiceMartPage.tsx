import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Anchor from "../../components/Anchor/Anchor";
import Footer from "../../components/Footer/Footer";
import ChatBubble from "../../components/ChatBubble/ChatBubble";

const JuiceMartPage = () => {
  return (
    <div>
      <Navbar />
      <Anchor href="/" variant="fixed top-40 left-10">
        <img src={require("../../assets/images/backButton.png")} alt="" />
      </Anchor>
      <div className="bg-e5e5e5 min-h-screen py-14">
        <div className="flex items-center justify-center gap-5">
          <img
            src={require("../../assets/images/juiceMart.png")}
            alt="juiceMart"
          />
          <h1 className="text-10b981 font-bold text-5xl">JuiceMart</h1>
        </div>
      </div>
      <ChatBubble setIsVisible={() => {}}/>
      <Footer />
    </div>
  );
};

export default JuiceMartPage;
