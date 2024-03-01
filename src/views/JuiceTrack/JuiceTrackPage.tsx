import React from "react";
import Footer from "../../components/Footer/Footer";
import ChatBubble from "../../components/ChatBubble/ChatBubble";
import Anchor from "../../components/Anchor/Anchor";
import Navbar from "../../components/Navbar/Navbar";

const JuiceTrackPage = () => {
  return (
    <div>
      <Navbar />
      <Anchor href="/" variant="fixed top-40 left-10">
        <img src={require("../../assets/images/backButton.png")} alt="" />
      </Anchor>
      <div className="bg-e5e5e5 min-h-screen py-14">
        <div className="flex items-center justify-center gap-5">
          <img
            src={require("../../assets/images/juiceTrack.png")}
            alt="juiceTip"
          />
          <h1 className="text-10b981 font-bold text-5xl">JuiceTrack</h1>
        </div>
      </div>
      <ChatBubble />
      <Footer />
    </div>
  );
};

export default JuiceTrackPage;
