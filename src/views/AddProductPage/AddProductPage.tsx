import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import BackButton from "../../components/BackButton/BackButton";
import Input from "../../components/InputGroup/Input/Input";
import Footer from "../../components/Footer/Footer";
import Button from "../../components/Button/Button";

const AddProductPage = () => {
  return (
    <div>
      <Navbar />
      <BackButton />
      <div className="bg-e5e5e5 min-h-screen py-14 w-full flex flex-col items-center">
        <div className="flex items-center justify-center gap-5">
          <img
            src={require("../../assets/images/juiceTip.png")}
            alt="juiceTip"
          />
          <h1 className="text-10b981 font-bold text-5xl">JuiceTip</h1>
        </div>
        <form className="w-2/3 mt-16 flex flex-col gap-5">
          <div className="flex flex-col bg-fafafa p-5 rounded-2xl gap-3">
            <h1 className="text-5d5d5d font-bold text-3xl">Insert Picture *</h1>
            <p>Picture can be as .JPG, .PNG, maximum five pictures</p>
          </div>
          <div className="flex flex-col bg-fafafa p-5 rounded-2xl gap-3">
            <label htmlFor="price" className="text-5d5d5d font-bold text-3xl">
              Product Price *
            </label>
            <Input
              id="price"
              className="border-add-product border-2"
              placeholder="Insert Product Price ..."
            />
            <span className="text-10b981">
              *Prices do not include entrustment service fees
            </span>
          </div>
          <div className="flex flex-col bg-fafafa p-5 rounded-2xl gap-3">
            <div className="flex justify-between items-center">
              <label htmlFor="name" className="text-5d5d5d font-bold text-3xl">
                Product Name *
              </label>
              <span className="text-ababab text-2xl">0/150</span>
            </div>
            <Input
              id="name"
              className="border-add-product border-2"
              placeholder="Insert Product Name ..."
            />
          </div>
          <div className="flex flex-col bg-fafafa p-5 rounded-2xl gap-3">
            <div className="flex justify-between items-center">
              <label
                htmlFor="description"
                className="text-5d5d5d font-bold text-3xl"
              >
                Product Description *
              </label>
              <span className="text-ababab text-2xl">0/500</span>
            </div>
            <Input
              id="description"
              className="border-add-product border-2"
              placeholder="Insert Product Description ..."
            />
          </div>
          <div className="flex flex-col bg-fafafa p-5 rounded-2xl gap-3">
            <label
              htmlFor="category"
              className="text-5d5d5d font-bold text-3xl"
            >
              Category *
            </label>
            <select
              name="category"
              id="category"
              className="mt-2 px-5 py-3 focus:outline-none rounded-lg text-gray-600 font-medium text-sm w-full border-add-product border-2"
            >
              <option value="" disabled selected>
                Choose Product Category
              </option>
            </select>
          </div>
          <div className="flex flex-col bg-fafafa p-5 rounded-2xl gap-3">
            <label htmlFor="country" className="text-5d5d5d font-bold text-3xl">
              Choose Country
            </label>
            <select
              name="country"
              id="country"
              className="mt-2 px-5 py-3 focus:outline-none rounded-lg text-gray-600 font-medium text-sm w-full border-add-product border-2"
              defaultValue={"default"}
            >
              <option value="default" disabled selected>
                Choose Country
              </option>
            </select>
          </div>
          <div className="flex flex-col bg-fafafa p-5 rounded-2xl gap-3">
            <div className="flex justify-between items-center">
              <label htmlFor="notes" className="text-5d5d5d font-bold text-3xl">
                Notes
              </label>
              <span className="text-ababab text-2xl">0/150</span>
            </div>
            <Input
              id="notes"
              className="border-add-product border-2"
              placeholder="Insert Your Notes ..."
            />
          </div>
          <div className="flex gap-2 ml-2 mt-5">
            <input type="checkbox" id="checkbox" name="checkbox" />
            <label
              htmlFor="checkbox"
              className="text-5d5d5d font-semibold text-xl"
            >
              Checklist the button if you are sure about your product form
            </label>
          </div>
          <div className="w-full flex justify-center">
            <Button className="bg-10b981 text-white w-fit px-9 text-2xl font-medium ">
              Upload Product
            </Button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default AddProductPage;
