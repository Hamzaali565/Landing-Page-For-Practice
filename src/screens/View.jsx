import React, { useEffect, useState } from "react";
import { url } from "../constants/constant";
import useUserStore from "../store/zustand";
import NewFooter from "../components/NewFooter";
import { useDebounce } from "use-debounce";
import { TbLoader2 } from "react-icons/tb";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import { useNavigate } from "react-router-dom";
import Modal from "../components/Modal";
import { toast } from "react-toastify";

const View = () => {
  const [listData, setListData] = useState([]);
  const [copyListData, setCopyListData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingExcel, setLoadingExcel] = useState(false);
  const [listPermission, setListPermission] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm] = useDebounce(searchTerm, 300);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleSubmit = async (value) => {
    try {
      console.log("Form submitted:", value);
      const response = await fetch(`${url}/excel_request`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: value?.email,
          product_detail: value?.productDetail,
          username: value.name,
        }),
      });
      const data = await response.json();
      if (!response.ok) {
        toast.error(data?.message);
        return;
      }
      toast.success(
        "Request generated successfully. You will be notified through E-mail. "
      );
    } catch (error) {
      console.log("error", error);
    }
  };
  const { login_check } = useUserStore();
  useEffect(() => {
    getData();
    list_view();
  }, []);

  const navigate = useNavigate();

  useEffect(() => {
    if (debouncedSearchTerm.trim() === "") {
      setListData(copyListData);
    } else {
      filter_name(debouncedSearchTerm);
    }
  }, [debouncedSearchTerm]);

  // const downloadExcelFile = () => {
  //   setLoadingExcel(true);
  //   let downloadData = null;

  //   if (!login_check) {
  //     downloadData = copyListData.map((item) => ({
  //       Code: item?.code,
  //       Name: item?.name,
  //       "Part Number": item?.part_number,
  //       "Printer Model": item?.printer_model,
  //     }));
  //   } else {
  //     downloadData = copyListData.map((item) => ({
  //       Code: item?.code,
  //       Name: item?.name,
  //       "Sales Price": item?.sales_price,
  //       "Available Stock": item?.free_stock,
  //       "Part Number": item?.part_number,
  //       "Printer Model": item?.printer_model,
  //     }));
  //   }

  //   const worksheet = XLSX.utils.json_to_sheet(downloadData);

  //   // Calculate column widths
  //   const columnWidths = Object.keys(downloadData[0] || {}).map((key) => {
  //     const maxLength = downloadData.reduce((max, row) => {
  //       const value = row[key] ? row[key].toString() : "";
  //       return Math.max(max, value.length);
  //     }, key.length); // include header length too

  //     return { wch: maxLength + 2 }; // +2 for extra padding
  //   });

  //   worksheet["!cols"] = columnWidths;

  //   const workbook = XLSX.utils.book_new();
  //   XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");

  //   // Convert to a Blob and download it
  //   const excelBlob = XLSX.write(workbook, {
  //     bookType: "xlsx",
  //     type: "array",
  //   });
  //   const blob = new Blob([excelBlob], {
  //     type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  //   });
  //   setLoadingExcel(false);
  //   saveAs(blob, "Product List.xlsx");
  // };

  const downloadExcelFile = () => {
    if (!login_check) {
      navigate("/login");
      return;
    } else {
      handleOpenModal();
    }
  };

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
      [
        item.code,
        item.name,
        item.manufacturer,
        item.part_number,
        item?.printer_model,
      ].some((field) => field?.toLowerCase().includes(searchTerm))
    );
    setListData(filterData.length > 0 ? filterData : copyListData);
  };

  const list_view = async () => {
    try {
      const response = await fetch(`${url}/spec_user`, {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      if (!response.ok) {
        console.log("response error -->", response);
        return;
      }
      console.log(data.data);
      setListPermission(data?.data);
    } catch (error) {
      console.log("error -->", error);
    }
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
              onClick={downloadExcelFile}
              type="submit"
              disabled={loadingExcel}
              className="border-2 p-2 px-4 rounded-lg bg-[#F50A8B] text-white font-bold inline-flex items-center justify-center gap-2"
            >
              Request For Excel{" "}
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
            <p
              className={`border-r-2 p-2 ${
                !login_check ? "w-[50%]" : "w-[25%]"
              } md: lg:w-[30%] text-center`}
            >
              Name
            </p>
            {/* <p className="border-r-2 p-2 w-[10%] text-center hidden lg:block">
              Manufacturer
            </p> */}
            <p className="border-r-2 p-2 w-[15%] text-center hidden lg:block">
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
              Available Stock
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
            {/* <p className="border-r-2 p-2 w-[25%] md: lg:w-[20%] text-left"> */}
            <p
              className={`border-r-2 p-2 ${
                !login_check ? "w-[50%]" : "w-[25%]"
              }  lg:w-[30%] text-left`}
            >
              {items?.name}
            </p>
            {/* <p className="border-r-2 p-2 w-[10%] text-left hidden lg:block">
              {items?.manufacturer}
            </p> */}
            <p className="border-r-2 p-2 w-[15%] text-left hidden lg:block">
              {items?.part_number}
            </p>
            {login_check && (
              <p className="border-r-2 p-2 w-[25%] md: lg:w-[7.5%] text-center">
                {listPermission
                  ? listPermission?.product_list
                    ? items?.sales_price
                    : listPermission?.advantia_list
                    ? items?.advantia_price
                    : listPermission?.integra_list
                    ? items?.integra_price
                    : items?.sales_price
                  : items?.sales_price}
              </p>
            )}
            <p
              className={`border-r-2 p-2 w-[25%] ${
                login_check ? "lg:w-[7.5%]" : "lg:w-[15%]"
              } md: text-center`}
            >
              {items?.free_stock}
            </p>
            <p className="border-r-2 p-2 w-[30%] text-left hidden lg:block">
              {items?.printer_model}
            </p>
          </div>
        ))}

      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleSubmit}
      />

      <div className="pt-36">
        <NewFooter />
      </div>
    </div>
  );
};

export default View;
