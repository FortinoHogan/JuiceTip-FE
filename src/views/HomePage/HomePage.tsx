import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ButtonLogo from "../../components/ButtonLogo/ButtonLogo";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { RootState } from "../../redux/store";
import TakeOrderModal from "../../components/Modal/TakeOrderModalBeforeLogin/TakeOrderModalBeforeLogin";
import SearchBar from "../../components/SearchBar/SearchBar";
import ProductCard from "../../components/ProductCard/ProductCard";
import Button from "../../components/Button/Button";
import { IRegion, getRegions } from "../../Services/regionService";
import { IProduct, getProducts } from "../../Services/productService";
import ChatButton from "../../components/ChatButton/ChatButton";

const Homepage = () => {
  const { isLoggedIn, user } = useSelector((state: RootState) => state.auth);
  const [isVisible, setIsVisible] = useState(false);
  const [regions, setRegions] = useState([]);
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    getRegions((res: any) => {
      setRegions(res);
    });
    getProducts((res: any) => {
      setProducts(res);
    });
  }, []);


  return (
    <div className="bg-e5e5e5">
      <Navbar />
      <div className="min-h-screen w-full flex flex-col items-center justify-center">
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
            href="/juice-tip"
            src="juiceTip.png"
            title="JuiceTip"
            setIsVisible={setIsVisible}
          />
          <ButtonLogo
            href="/juice-mart"
            src="juiceMart.png"
            title="JuiceMart"
            setIsVisible={setIsVisible}
          />
          <ButtonLogo
            href="/juice-track"
            src="juiceTrack.png"
            title="JuiceTrack"
            setIsVisible={setIsVisible}
          />
        </div>
        <SearchBar />
        <div className="flex gap-5 items-center justify-center w-2/3 my-7">
          {regions.map((region: IRegion) => (
            <Button
              className="border-10b981 bg-fafafa py-1 px-9 text-10b981 text-2xl font-medium rounded-full"
              key={region.regionId}
            >
              {region.region}
            </Button>
          ))}
          <img
            src={require("../../assets/images/filterButton.png")}
            alt="filterButton"
            className="w-14"
          />
        </div>
        {products.map((product, index) => (
          <ProductCard
            key={product.productId}
            productId={product.productId}
            productName={product.productName}
            productPrice={product.productPrice}
            productImage={product.productImage}
            productDescription={product.productDescription}
            categoryId={product.categoryId}
            categoryName={product.categoryName}
            regionId={product.regionId}
            regionName={product.regionName}
            customerId={product.customerId}
            customerName={product.customerName}
            notes={product.notes}
            createdAt={product.createdAt}
            lastUpdatedAt={product.lastUpdatedAt}
          />
        ))}
        <ChatButton setIsVisible={setIsVisible} />
      </div>
      <Footer />
      {isVisible ? (
        <TakeOrderModal isVisible={isVisible} setIsVisible={setIsVisible} />
      ) : null}
    </div>
  );
};

export default Homepage;
