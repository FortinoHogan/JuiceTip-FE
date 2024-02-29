import Anchor from "../../components/Anchor/Anchor";
import ButtonLogo from "../../components/ButtonLogo/ButtonLogo";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

const Homepage = () => {
  return (
    <div className="bg-e5e5e5">
      <Navbar />
      <div className="min-h-screen">
        <div className="flex flex-col items-center mt-28 mb-20 gap-2">
          <h1 className="text-5xl font-bold text-10b981">
            WELCOME TO JUICETIP
          </h1>
          <p className="text-10b981 text-2xl">Your Entrustment Solution!</p>
        </div>
        <div className="flex items-center justify-center">
          <ButtonLogo href="/juiceTip" src="juiceTip.png" title="JuiceTip" />
          <ButtonLogo href="/juiceMart" src="juiceMart.png" title="JuiceMart" />
          <ButtonLogo
            href="/juiceTrack"
            src="juiceTrack.png"
            title="JuiceTrack"
          />
        </div>
        <Anchor
          variant="bg-10b981 fixed right-10 bottom-10 p-4 rounded-3xl gap-2 flex items-center justify-center"
          href="/chat"
        >
          <img
            src={require("../../assets/images/bubbleChat.png")}
            alt="bubbleChat"
          />
          <p className="text-white text-xl">Chat</p>
        </Anchor>
      </div>
      <Footer />
    </div>
  );
};

export default Homepage;
