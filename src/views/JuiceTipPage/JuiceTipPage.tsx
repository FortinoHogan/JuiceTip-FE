import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import SearchBar from "../../components/SearchBar/SearchBar";
import BackButton from "../../components/BackButton/BackButton";
import ProductCard from "../../components/ProductCard/ProductCard";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import { IRegion, getRegions } from "../../Services/regionService";
import { IProduct, getProducts } from "../../Services/productService";
import ChatButton from "../../components/ChatButton/ChatButton";

const JuiceTipPage = () => {
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
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/product");
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
        {products.map((product) => (
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
        <ChatButton setIsVisible={() => { }} />
      </div>
      <Footer />
    </div>
  );
};

export default JuiceTipPage;
