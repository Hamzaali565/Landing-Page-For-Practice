import React from "react";
import TCLogo from "./images/TC-logo.png";
const Header = () => {
  return (
    <div className="flex justify-between text-lg">
      <div className="mt-1">
        <img src={TCLogo} alt="" className="w-40 h-auto " />
      </div>
      <div className="hidden md:block">
        <p>
          <span className="font-bold mr-3">TEL:</span> 01768 210 800
        </p>
        <p>
          <span className="font-bold mr-3">EMAIL:</span>
          <span className="underline text-blue-600">
            consumables@tradecopiers.co.uk
          </span>
        </p>
      </div>
    </div>
  );
};

export default Header;
