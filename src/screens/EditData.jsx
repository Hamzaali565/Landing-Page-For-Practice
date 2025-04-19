import React, { useState } from "react";
import Header from "../components/Header";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import { url } from "../constants/constant";
import NewFooter from "../components/NewFooter";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { TbLoader2 } from "react-icons/tb";
const EditData = () => {
  const [allData, setAllData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingExcel, setLoadingExcel] = useState(false);
  const navigate = useNavigate();
  const getData = async () => {
    setLoadingExcel(true);
    try {
      const response = await fetch(`${url}/list`);
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const data = await response.json();
      downloadExcelFile(data?.data);
      console.log(data?.data);
      setLoadingExcel(false);
    } catch (error) {
      setLoadingExcel(false);
      toast.error("Internet / Server Error");
      console.log(error);
    }
  };
  const downloadExcelFile = (jsonData) => {
    const worksheet = XLSX.utils.json_to_sheet(jsonData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");

    // Convert to a Blob and download it
    const excelBlob = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });
    const blob = new Blob([excelBlob], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });
    saveAs(blob, "Item List.xlsx");
  };
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    console.log("file", file);
    if (file === undefined) {
      return;
    }

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: "array" });

        // Get the first worksheet in the Excel file
        const worksheet = workbook.Sheets[workbook.SheetNames[0]];

        // Convert the worksheet to an array
        const sheetData = XLSX.utils.sheet_to_json(worksheet, { header: 1 }); // Get as array of arrays

        // Remove the first four rows

        const filteredData = sheetData;

        // Convert the remaining data back to JSON (assuming the first row contains headers)
        let JSONDATA = XLSX.utils.sheet_to_json(
          XLSX.utils.aoa_to_sheet(filteredData)
        );
        JSONDATA = JSONDATA.map((items) => {
          return Object.fromEntries(
            Object.entries(items).map(([key, value]) => [
              key.trim(),
              value?.toString().trim(),
            ])
          );
        });
        setAllData(JSONDATA);
      };
      reader.readAsArrayBuffer(file);
    }
  };
  const saveData = async () => {
    if (allData.length === 0) {
      toast.error("No data to save.");
      return;
    }
    setLoading(true);
    try {
      const response = await fetch(`${url}/list`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          // 'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ data: allData }),
      });
      const result = await response.json();
      if (!response?.ok) {
        toast.error(result?.message);
        setLoading(false);
        return;
      }
      toast.success("Data saved successfully ☺");
      setAllData([]);
      navigate("/");
      setLoading(false);
    } catch (error) {
      console.log(error);
      toast.error("Internet / Server error");
      setLoading(false);
    }
  };
  return (
    <div>
      <Header />
      <div className="text-3xl font-bold text-center mt-4 underline">
        UPDATE LIST
      </div>
      <div className="flex justify-center items-center my-4 flex-col space-y-4">
        <button
          onClick={getData}
          type="submit"
          disabled={loadingExcel}
          className="border-2 p-2 px-4 rounded-lg bg-gray-500 text-white font-bold inline-flex items-center justify-center gap-2"
        >
          Download Excel{" "}
          {loadingExcel && (
            <span>
              <TbLoader2 className="text-yellow-400 animate-spin" />
            </span>
          )}
        </button>
        <div className="w-full max-w-md">
          <label
            htmlFor="file-upload"
            className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-2xl p-6 text-center cursor-pointer hover:border-blue-500 transition duration-300"
          >
            <svg
              className="w-10 h-10 text-gray-400 mb-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 16V4a1 1 0 011-1h8a1 1 0 011 1v12m-5 4h.01M12 20h.01M12 16v4m-4-4h.01M8 20h.01M8 16v4"
              />
            </svg>
            <span className="text-gray-500 font-medium">
              Click to upload file
            </span>
            <input
              id="file-upload"
              type="file"
              className="hidden"
              onChange={handleFileUpload}
            />
          </label>
        </div>
        {/* <button
          onClick={saveData}
          className="border-2 p-2 px-4 rounded-lg bg-gray-500 text-white font-bold"
          >
          Save
        </button> */}
        <button
          onClick={saveData}
          type="submit"
          disabled={loading}
          className="border-2 p-2 px-4 rounded-lg bg-gray-500 text-white font-bold inline-flex items-center justify-center gap-2"
        >
          Save{" "}
          {loading && (
            <span>
              <TbLoader2 className="text-yellow-400 animate-spin" />
            </span>
          )}
        </button>
      </div>
      {allData.length !== 0 && (
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
          <p className="border-r-2 p-2 w-[25%] md: lg:w-[7.5%] text-center ">
            Sales Price
          </p>
          <p className="border-r-2 p-2 w-[25%] md: lg:w-[7.5%] text-center">
            Free Stock
          </p>
          <p className="border-r-2 p-2 w-[30%] text-center hidden lg:block">
            Printer Models
          </p>
        </div>
      )}
      {allData.length !== 0 &&
        allData.map((items, index) => (
          <div
            className={`border-2 border-t-0 flex text-xs md:text-sm lg:text-lg item-center ${
              !items?._id ? "bg-yellow-200" : ""
            }`}
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
            <p className="border-r-2 p-2 w-[25%] md: lg:w-[7.5%] text-center ">
              {items?.sales_price}
            </p>
            <p className="border-r-2 p-2 w-[25%] md: lg:w-[7.5%] text-center">
              {items?.free_stock}
            </p>
            <p className="border-r-2 p-2 w-[30%] text-center hidden lg:block">
              {items?.printer_model}
            </p>
          </div>
        ))}
      <div className="mt-4">
        <NewFooter />
      </div>
    </div>
  );
};

export default EditData;
