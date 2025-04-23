import React, { useEffect, useState } from "react";
import { url } from "../constants/constant";
import NewFooter from "../components/NewFooter";
import { useDebounce } from "use-debounce";
import { TbLoader2 } from "react-icons/tb";

const ProductList = () => {
  const [listData, setListData] = useState([]);
  const [copyListData, setCopyListData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingExcel, setLoadingExcel] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm] = useDebounce(searchTerm, 300);

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (debouncedSearchTerm.trim() === "") {
      setListData(copyListData);
    } else {
      filter_name(debouncedSearchTerm);
    }
  }, [debouncedSearchTerm]);

  const getData = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${url}/list`);
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const data = await response.json();
      setListData(data?.data);
      setCopyListData(data?.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const filter_name = (value) => {
    const searchTerm = value.toLowerCase();
    const filterData = copyListData.filter((item) =>
      [item.code, item.name, item.manufacturer, item.part_number].some(
        (field) => field?.toLowerCase().includes(searchTerm)
      )
    );
    setListData(filterData.length > 0 ? filterData : copyListData);
  };
  return (
    <div>
      <div className="h-36 fixed w-full z-30 bg-white">
        <p className="text-center text-lg md:text-3xl mt-4 font-bold ">
          Search Consumables Product List
        </p>
        <div className="flex justify-center mt-4 gap-4">
          <input
            type="text"
            className="border-2 w-[60%] md:w-[40%] p-2 rounded border-black"
            name=""
            placeholder="Search..."
            id=""
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div>
            <button
              // onClick={getData}
              type="submit"
              disabled={loadingExcel}
              className="border-2 p-2 px-4 rounded-lg bg-[#F50A8B] text-white font-bold inline-flex items-center justify-center gap-2"
            >
              Download Excel{" "}
              {loadingExcel && (
                <span>
                  <TbLoader2 className="text-yellow-400 animate-spin" />
                </span>
              )}
            </button>
          </div>
        </div>
        {loading && (
          <div className="flex justify-center mt-4">
            <TbLoader2 className="text-blue-700 font-extrabold animate-spin text-3xl" />
          </div>
        )}
      </div>
      {listData.length !== 0 && (
        <div className="pt-36">
          <div className="border-2 flex font-bold text-xs md:text-sm lg:text-lg item-center bg-[#F4F4F4] mt-4 mx-3">
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

            <p className="border-r-2 p-2 w-[25%] md: lg:w-[7.5%] text-center ">
              Sales Price
            </p>

            <p className={`border-r-2 p-2 w-[25%]  lg:w-[7.5%] text-center`}>
              Free Stock
            </p>
            <p className="border-r-2 p-2 w-[30%] text-left hidden lg:block">
              Printer Models
            </p>
          </div>
        </div>
      )}

      {listData.length !== 0 &&
        listData.map((items, index) => (
          <div
            className="border-2 border-t-0 flex text-xs md:text-sm lg:text-sm item-center mx-3"
            key={index}
          >
            <p className="border-r-2 p-2 w-[25%] md: lg:w-[10%] text-left">
              {items?.code}
            </p>
            <p className="border-r-2 p-2 w-[25%] md: lg:w-[20%] text-left">
              {items?.name}
            </p>
            <p className="border-r-2 p-2 w-[10%] text-left hidden lg:block">
              {items?.manufacturer}
            </p>
            <p className="border-r-2 p-2 w-[15%] text-left hidden md:block">
              {items?.part_number}
            </p>

            <p className="border-r-2 p-2 w-[25%] md: lg:w-[7.5%] text-center">
              {items?.sales_price}
            </p>

            <p className={`border-r-2 p-2 w-[25%] lg:w-[7.5%] text-center`}>
              {items?.free_stock}
            </p>
            <p className="border-r-2 p-2 w-[30%] text-left hidden lg:block">
              {items?.printer_model}
            </p>
          </div>
        ))}
      <div className="pt-36">
        <NewFooter />
      </div>
    </div>
  );
};

export default ProductList;
