import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import BackButton from "../../components/BackButton/BackButton";
import Input from "../../components/InputGroup/Input/Input";
import Footer from "../../components/Footer/Footer";
import Button from "../../components/Button/Button";
import InsertPicture from "../../components/InsertPicture/InsertPicture";
import { getRegions, IRegion } from "../../Services/regionService";
import { ICategory } from "../../interfaces/Category.interfaces";
import { getCategories } from "../../Services/categoryService";
import CountryModal from "../../components/Modal/CountryModal/CountryModal";
import CategoryModal from "../../components/Modal/CategoryModal/CategoryModal";

const AddProductPage = () => {
  const [regions, setRegions] = useState<IRegion[]>([]);
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [nameValue, setNameValue] = useState("");
  const [descriptionValue, setDescriptionValue] = useState("");
  const [notesValue, setNotesValue] = useState("");
  const [categoryModal, setCategoryModal] = useState(false);
  const [countryModal, setCountryModal] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useEffect(() => {
    getRegions((res: any) => {
      setRegions(res);
    });
    getCategories((res: any) => {
      setCategories(res);
    });
  }, []);

  const handleNameChange = (e: any) => {
    const value = e.target.value;
    setNameValue(value);
  };

  const handleDescriptionChange = (e: any) => {
    const value = e.target.value;
    setDescriptionValue(value);
  };

  const handleNotesChange = (e: any) => {
    const value = e.target.value;
    setNotesValue(value);
  };

  const handleSelectCountry = (country: string) => {
    setSelectedCountry(country);
    setCountryModal(false);
  };

  const handleSelectCategory = (category: string) => {
    setSelectedCategory(category);
    setCategoryModal(false);
  };

  return (
    <div>
      <Navbar />
      <BackButton />
      <div className="bg-e5e5e5 min-h-screen py-14 w-full flex flex-col items-center">
        <div className="flex items-center justify-center gap-5">
          <img
            src={require("../../assets/images/juiceTip.png")}
            alt="juiceTip"
            className="max-lg:w-36 max-lg:h-36"
          />
          <h1 className="text-10b981 font-bold text-5xl">JuiceTip</h1>
        </div>
        <form className="w-2/3 mt-16 flex flex-col gap-5">
          <div className="flex flex-col bg-fafafa p-5 rounded-2xl gap-3">
            <h1 className="text-5d5d5d font-bold text-3xl">
              Insert Picture <span className="text-red-500">*</span>
            </h1>
            <p>Picture can be as .JPG, .PNG, maximum five pictures</p>
            <div className="flex justify-center gap-10">
              {Array(5)
                .fill(undefined)
                .map((_, index) => (
                  <InsertPicture key={index} />
                ))}
            </div>
          </div>
          <div className="flex flex-col bg-fafafa p-5 rounded-2xl gap-3">
            <label htmlFor="price" className="text-5d5d5d font-bold text-3xl">
              Product Price <span className="text-red-500">*</span>
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
                Product Name <span className="text-red-500">*</span>
              </label>
              <span className="text-ababab text-2xl">
                {nameValue.length}/150
              </span>
            </div>
            <Input
              id="name"
              className="border-add-product border-2"
              placeholder="Insert Product Name ..."
              value={nameValue}
              onChange={handleNameChange}
              maxLength={150}
            />
          </div>
          <div className="flex flex-col bg-fafafa p-5 rounded-2xl gap-3">
            <div className="flex justify-between items-center">
              <label
                htmlFor="description"
                className="text-5d5d5d font-bold text-3xl"
              >
                Product Description <span className="text-red-500">*</span>
              </label>
              <span className="text-ababab text-2xl">
                {descriptionValue.length}/500
              </span>
            </div>
            <Input
              id="description"
              className="border-add-product border-2"
              placeholder="Insert Product Description ..."
              value={descriptionValue}
              onChange={handleDescriptionChange}
              maxLength={500}
            />
          </div>
          <div className="flex flex-col bg-fafafa p-5 rounded-2xl gap-3">
            <label
              htmlFor="category"
              className="text-5d5d5d font-bold text-3xl"
            >
              Category <span className="text-red-500">*</span>
            </label>
            <div
              className="border-add-product border-2 mt-2 px-5 py-3 focus:outline-none rounded-lg text-gray-600 font-medium text-sm w-full"
              onClick={() => setCategoryModal(!categoryModal)}
            >
              {selectedCategory || "Choose Product Category"}
            </div>
          </div>
          <div className="flex flex-col bg-fafafa p-5 rounded-2xl gap-3">
            <label htmlFor="country" className="text-5d5d5d font-bold text-3xl">
              Choose Country <span className="text-red-500">*</span>
            </label>
            <div
              className="border-add-product border-2 mt-2 px-5 py-3 focus:outline-none rounded-lg text-gray-600 font-medium text-sm w-full"
              onClick={() => setCountryModal(!countryModal)}
            >
              {selectedCountry || "Choose Country"}
            </div>
          </div>
          <div className="flex flex-col bg-fafafa p-5 rounded-2xl gap-3">
            <div className="flex justify-between items-center">
              <label htmlFor="notes" className="text-5d5d5d font-bold text-3xl">
                Notes
              </label>
              <span className="text-ababab text-2xl">
                {notesValue.length}/150
              </span>
            </div>
            <Input
              id="notes"
              className="border-add-product border-2"
              placeholder="Insert Your Notes ..."
              value={notesValue}
              onChange={handleNotesChange}
              maxLength={150}
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
      {countryModal && (
        <CountryModal
          isVisible={countryModal}
          onSelectCountry={handleSelectCountry}
          setIsVisible={setCountryModal}
          countries={regions}
        />
      )}
      {categoryModal && (
        <CategoryModal
          isVisible={categoryModal}
          onSelectCategory={handleSelectCategory}
          setIsVisible={setCategoryModal}
          categories={categories}
        />
      )}
    </div>
  );
};

export default AddProductPage;
