import React from "react";
import Button from "../Button/Button";
import { IProduct } from "../../Services/productService";

const ProductCard = (props: IProduct) => {
  const {
    productId,
    productName,
    productPrice,
    productDescription,
    productImage,
    regionId,
    customerId,
    notes,
    categoryId,
  } = props;
  return (
    <div className="flex my-7 bg-fafafa p-8 rounded-lg shadow-xl w-2/3 gap-6">
      <img
        src={`https://drive.google.com/thumbnail?id=1dMD1BiZYot1AULu_eHrkx3hxrL0q2zIj&sz=w1000`}
        alt="productCardLogo"
        className="product-card-logo p-5 w-60 h-60 object-cover object-top"
      />
      <div className="flex flex-col w-full">
        <div className="flex items-center justify-between relative">
          <h1 className="text-10b981 font-bold text-4xl">{productName}</h1>
          <p className="text-b5b8b9 font-bold text-md absolute right-0 bottom-0">
            Uploded at <span>2/28/ 24</span>
          </p>
        </div>
        <hr className="h-0.5 mt-3 bg-gray-200 border-0 bg-bcbec0 rounded-sm" />
        <div className="flex flex-col">
          <div className="flex items-center justify-between my-2">
            <h1 className="text-8c8c8c font-bold text-2xl">Indonesia</h1>
            <div className="flex py-2 px-4 items-center bg-e5e5e5 gap-3 rounded-md">
              <img
                src={require("../../assets/images/juiceCoin.png")}
                alt="juiceCoin"
                className="w-8"
              />
              <p className="text-8c8c8c font-bold text-xl">{productPrice}</p>
            </div>
          </div>
          <div className="flex items-center gap-3 mt mb-2">
            <img
              src={
                "https://drive.google.com/thumbnail?id=1dMD1BiZYot1AULu_eHrkx3hxrL0q2zIj&sz=w1000"
              }
              alt="profile"
              className="w-12 h-12 rounded-full object-cover object-top"
            />
            <div className="flex flex-col">
              <h1 className="text-8c8c8c font-bold text-xl">Jenifer Santika</h1>
              <p className="text-8c8c8c font-bold text-md">
                Last Updated <span>Feb 29th, 2024</span>
              </p>
            </div>
          </div>
          <div className="flex gap-5">
            <Button className="bg-10b981 text-white font-medium text-xl w-1/2">
              Take Order
            </Button>
            <Button className="bg-10b981 text-white font-medium text-xl w-1/2">
              Bargain
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
