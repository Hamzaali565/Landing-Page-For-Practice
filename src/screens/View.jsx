import React from "react";
import Header from "../components/Header";

const View = () => {
  return (
    <div>
      <Header />
      <p className="text-center text-3xl mt-4 font-bold">
        Search Consumables Product List
      </p>
      <div className="flex justify-center mt-4">
        <input
          type="text"
          className="border-2 w-[40%] p-2 rounded border-black"
          name=""
          placeholder="Search..."
          id=""
        />
      </div>
      <div className="border-2 flex font-bold text-lg item-center bg-[#F4F4F4] mt-4">
        <p className="border-r-2 p-2 w-[10%] text-center">Code</p>
        <p className="border-r-2 p-2 w-[20%] text-center">Name</p>
        <p className="border-r-2 p-2 w-[10%] text-center">Manufacturer</p>
        <p className="border-r-2 p-2 w-[15%] text-center">Part Number</p>
        <p className="border-r-2 p-2 w-[7.5%] text-center">Sales Price</p>
        <p className="border-r-2 p-2 w-[7.5%] text-center">Free Stock</p>
        <p className="border-r-2 p-2 w-[30%] text-center">Printer Models</p>
      </div>
      <div className="border-2 border-t-0 flex text-lg item-center ">
        <p className="border-r-2 p-2 w-[10%] text-center">Code</p>
        <p className="border-r-2 p-2 w-[20%] text-center">Name</p>
        <p className="border-r-2 p-2 w-[10%] text-center">Manufacturer</p>
        <p className="border-r-2 p-2 w-[15%] text-center">Part Number</p>
        <p className="border-r-2 p-2 w-[7.5%] text-center">Sales Price</p>
        <p className="border-r-2 p-2 w-[7.5%] text-center">Free Stock</p>
        <p className="border-r-2 p-2 w-[30%] text-center">Printer Models</p>
      </div>
    </div>
  );
};

export default View;
