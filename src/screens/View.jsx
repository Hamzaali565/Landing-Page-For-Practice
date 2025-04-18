import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { url } from "../constants/constant";
import useUserStore from "../store/zustand";

const View = () => {
  const [listData, setListData] = useState([]);
  const [copyListData, setCopyListData] = useState([]);
  const { login_check } = useUserStore();
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    try {
      const response = await fetch(`${url}/list`);
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const data = await response.json();
      setListData(data?.data);
      setCopyListData(data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  const filter_name = (value) => {
    const searchTerm = value.toLowerCase();
    if (value === "") {
      getData();
      return;
    }
    const filterData = listData.filter((items) =>
      Object.values(items).some(
        (values) =>
          typeof values === "string" &&
          values.toLowerCase().includes(searchTerm)
      )
    );
    if (filterData.length <= 0) {
      setListData(copyListData);
      return;
    }
    setListData(filterData);
  };
  return (
    <div>
      <Header />
      <p className="text-center text-lg md:text-3xl mt-4 font-bold ">
        Search Consumables Product List
      </p>
      <div className="flex justify-center mt-4">
        <input
          type="text"
          className="border-2 w-[60%] md:w-[40%] p-2 rounded border-black"
          name=""
          placeholder="Search..."
          id=""
          onChange={(e) => filter_name(e.target.value)}
        />
      </div>
      <div className="border-2 flex font-bold text-xs md:text-sm lg:text-lg item-center bg-[#F4F4F4] mt-4">
        <p className="border-r-2 p-2 w-[25%] md: lg:w-[10%] text-center">
          Code
        </p>
        <p className="border-r-2 p-2 w-[25%] md: lg:w-[20%] text-center">
          Name
        </p>
        <p className="border-r-2 p-2 w-[10%] text-center hidden lg:block">
          Manufacturer
        </p>
        <p className="border-r-2 p-2 w-[15%] text-center hidden md:block">
          Part Number
        </p>
        {login_check && (
          <p className="border-r-2 p-2 w-[25%] md: lg:w-[7.5%] text-center ">
            Sales Price
          </p>
        )}
        <p
          className={`border-r-2 p-2 w-[25%] ${
            login_check ? "lg:w-[7.5%]" : "lg:w-[15%]"
          }  md: text-center`}
        >
          Free Stock
        </p>
        <p className="border-r-2 p-2 w-[30%] text-center hidden lg:block">
          Printer Models
        </p>
      </div>
      {listData.length !== 0 &&
        listData.map((items, index) => (
          <div
            className="border-2 border-t-0 flex text-xs md:text-sm lg:text-lg item-center "
            key={index}
          >
            <p className="border-r-2 p-2 w-[25%] md: lg:w-[10%] text-center">
              {items?.code}
            </p>
            <p className="border-r-2 p-2 w-[25%] md: lg:w-[20%] text-center">
              {items?.name}
            </p>
            <p className="border-r-2 p-2 w-[10%] text-center hidden lg:block">
              {items?.manufacturer}
            </p>
            <p className="border-r-2 p-2 w-[15%] text-center hidden md:block">
              {items?.part_number}
            </p>
            {login_check && (
              <p className="border-r-2 p-2 w-[25%] md: lg:w-[7.5%] text-center">
                {items?.sales_price}
              </p>
            )}
            <p
              className={`border-r-2 p-2 w-[25%] ${
                login_check ? "lg:w-[7.5%]" : "lg:w-[15%]"
              } md: text-center`}
            >
              {items?.free_stock}
            </p>
            <p className="border-r-2 p-2 w-[30%] text-center hidden lg:block">
              {items?.printer_model}
            </p>
          </div>
        ))}
    </div>
  );
};

export default View;
