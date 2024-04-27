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
    categoryId,
    categoryName,
    regionId,
    regionName,
    customerId,
    customerName,
    notes,
    createdAt,
    lastUpdatedAt
  } = props;

  const format_d_mm_yy = (date: Date) => {
    let datetime = new Date(date);

    let day: string | number = datetime.getDate();
    let month: string | number = datetime.getMonth() + 1;
    let year = datetime.getFullYear();

    day = day < 10 ? '0' + day : day;
    month = month < 10 ? '0' + month : month;

    let formattedDate = day + '/' + month + '/' + (year % 100);

    return formattedDate
  }

  const format_last_updated = (date: Date) => {
    function getOrdinalSuffix(day: number) {
      if (day >= 11 && day <= 13) {
        return 'th';
      }
      switch (day % 10) {
        case 1: return 'st';
        case 2: return 'nd';
        case 3: return 'rd';
        default: return 'th';
      }
    }

    let datetime = new Date(date);
    let monthNames = [
      "January", "February", "March", "April", "May", "June", "July",
      "August", "September", "October", "November", "December"
    ];

    let day = datetime.getDate();
    let month = datetime.getMonth();
    let year = datetime.getFullYear();

    let monthName = monthNames[month];

    let suffix = getOrdinalSuffix(day);

    let formattedDate = monthName + ' ' + day + suffix + ', ' + year;

    return formattedDate;
  }

  return (
    <div className="flex my-7 bg-fafafa p-8 rounded-lg shadow-xl w-2/3 gap-6">
      <img
        src={`https://drive.google.com/thumbnail?id=1dMD1BiZYot1AULu_eHrkx3hxrL0q2zIj&sz=w1000`}
        alt="productCardLogo"
        className="product-card-logo w-60 h-60 object-cover object-top"
      />
      <div className="flex flex-col w-full">
        <div className="flex items-center justify-between relative">
          <h1 className="text-10b981 font-bold text-4xl">{productName}</h1>
          <p className="text-b5b8b9 font-bold text-md absolute right-0 bottom-0">
            Uploded at <span>{format_d_mm_yy(createdAt)}</span>
          </p>
        </div>
        <hr className="h-0.5 mt-3 bg-gray-200 border-0 bg-bcbec0 rounded-sm" />
        <div className="flex flex-col">
          <div className="flex items-center justify-between my-2">
            <h1 className="text-8c8c8c font-bold text-2xl">{regionName}</h1>
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
              <h1 className="text-8c8c8c font-bold text-xl">{customerName}</h1>
              <p className="text-8c8c8c font-bold text-md">
                Last Updated <span>{format_last_updated(lastUpdatedAt)}</span>
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
