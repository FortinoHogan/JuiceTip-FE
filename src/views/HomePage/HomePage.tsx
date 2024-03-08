import { useState } from "react";
import { useSelector } from "react-redux";
import ButtonLogo from "../../components/ButtonLogo/ButtonLogo";
import ChatBubble from "../../components/ChatBubble/ChatBubble";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { RootState } from "../../redux/store";
import TakeOrderModal from "../../components/Modal/TakeOrderModalBeforeLogin/TakeOrderModalBeforeLogin";
import SearchBar from "../../components/SearchBar/SearchBar";

const Homepage = () => {
  const { isLoggedIn, user } = useSelector((state: RootState) => state.auth);
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className="bg-e5e5e5">
      <Navbar />
      <div className="min-h-screen">
        <div className="flex flex-col items-center mt-28 mb-20 gap-2">
          <h1 className="text-5xl font-bold text-10b981">
            {isLoggedIn
              ? `WELCOME TO JUICETIP, ${user.firstName.toUpperCase()}`
              : "WELCOME TO JUICETIP"}
          </h1>
          <p className="text-10b981 text-2xl">Your Entrustment Solution!</p>
        </div>
        <div className="flex items-center justify-center">
          <ButtonLogo
            href="/juiceTip"
            src="juiceTip.png"
            title="JuiceTip"
            setIsVisible={setIsVisible}
          />
          <ButtonLogo
            href="/juiceMart"
            src="juiceMart.png"
            title="JuiceMart"
            setIsVisible={setIsVisible}
          />
          <ButtonLogo
            href="/juiceTrack"
            src="juiceTrack.png"
            title="JuiceTrack"
            setIsVisible={setIsVisible}
          />
        </div>
        <SearchBar />
        <ChatBubble setIsVisible={setIsVisible} />
      </div>
      <Footer />
      {isVisible ? (
        <TakeOrderModal isVisible={isVisible} setIsVisible={setIsVisible} />
      ) : null}
    </div>
  );
};

export default Homepage;
