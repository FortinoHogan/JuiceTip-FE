import Button from "../../components/Button/Button";
import ButtonLogo from "../../components/ButtonLogo/ButtonLogo";
import Navbar from "../../components/Navbar/Navbar";

const Homepage = () => {
  return (
    <div className="">
      <Navbar />
      <div className="flex flex-col items-center">
        <h1 className="text-5xl font-bold text-10b981">WELCOME TO JUICETIP</h1>
        <p className="text-10b981 text-xl">Your Entrustment Solution!</p>
      </div>
      <div>
        <ButtonLogo
          href="/juiceTip"
          src="../../assets/images/juiceTip.png"
          title="JuiceTip"
        />
        <ButtonLogo
          href="/juiceMart"
          src="../../assets/images/juiceMart.png"
          title="JuiceMart"
        />
        <ButtonLogo
          href="/juiceTrack"
          src="../../assets/images/juiceTrack.png"
          title="JuiceTrack"
        />
      </div>
    </div>
  );
};

export default Homepage;
