import React, { useState } from "react";
import ModalIndex from "../ModalIndex/ModalIndex";
import { ICountryModal } from "./ICountryModal";
import SearchBar from "../../SearchBar/SearchBar";
import { IRegion } from "../../../Services/regionService";
import Button from "../../Button/Button";

const CountryModal = (props: ICountryModal) => {
  const { isVisible, setIsVisible, countries, onSelectCountry } = props;
  const [selectedRegion, setSelectedRegion] = useState<string>("");
  const handleModalClick = () => {
    setIsVisible(false);
  };

  const handleStopPropagation = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  const handleSelectCountry = (region: string) => {
    setSelectedRegion(region);
  };

  const handleChoose = () => {
    onSelectCountry(selectedRegion); 
  }

  return (
    <ModalIndex onClick={handleModalClick}>
      <div onClick={handleStopPropagation} className="w-[50rem]">
        <div className="bg-fafafa rounded-xl flex flex-col items-center justify-center py-14 px-32 w-full gap-3">
          <h1 className="text-3xl text-10b981 font-bold w-full text-left">
            <span onClick={handleModalClick} className="cursor-pointer">&#x2715;</span> Choose Country *
          </h1>
          <SearchBar className="mt-0 w-full border border-black" />
          {countries.map((region: IRegion) => (
            <div
              key={region.regionId}
              className={`flex items-center justify-between w-full border-b-2 py-3 text-lg`}
              onClick={() => handleSelectCountry(region.region)}
            >
              <label
                htmlFor={region.region}
                className={`text-5d5d5d ${
                  selectedRegion === region.region ? "text-10b981" : ""
                }`}
              >
                {region.region}
              </label>
              <input
                id={region.regionId}
                name={region.region}
                type="radio"
                value={selectedRegion}
                checked={selectedRegion === region.region}
                onChange={() => {}}
              />
            </div>
          ))}
          <Button className="bg-10b981 text-white w-fit px-14 text-2xl font-medium" onClick={handleChoose}>Choose</Button>
        </div>
      </div>
    </ModalIndex>
  );
};

export default CountryModal;
