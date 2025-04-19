import React from "react";
import Marquee from "react-fast-marquee";
import logo1 from "./images/BrandLogo/logo1.png";
import logo2 from "./images/BrandLogo/logo10.png";
import logo3 from "./images/BrandLogo/logo11.png";
import logo4 from "./images/BrandLogo/logo12.png";
import logo5 from "./images/BrandLogo/logo13.png";
import logo6 from "./images/BrandLogo/logo14.png";
import logo7 from "./images/BrandLogo/logo15.png";
import logo8 from "./images/BrandLogo/logo16.png";
import logo9 from "./images/BrandLogo/logo18.png";
import logo11 from "./images/BrandLogo/logo2.png";
import logo24 from "./images/BrandLogo/logo3.png";
import logo25 from "./images/BrandLogo/logo4.png";
import logo26 from "./images/BrandLogo/logo5.png";
import logo27 from "./images/BrandLogo/logo6.png";
import logo28 from "./images/BrandLogo/logo8.png";
import logo30 from "./images/BrandLogo/logo9.png";
import logo10 from "./images/BrandLogo/logo19.png";
import logo12 from "./images/BrandLogo/logo20.png";
import logo13 from "./images/BrandLogo/logo21.png";
import logo14 from "./images/BrandLogo/logo22.png";
import logo15 from "./images/BrandLogo/logo23.png";
import logo16 from "./images/BrandLogo/logo24.png";
import logo17 from "./images/BrandLogo/logo25.png";
import logo18 from "./images/BrandLogo/logo26.png";
import logo19 from "./images/BrandLogo/logo28.png";
import logo29 from "./images/BrandLogo/logo29.png";
import logo21 from "./images/BrandLogo/logo30.png";
import logo22 from "./images/BrandLogo/logo31.png";
import logo23 from "./images/BrandLogo/logo32.png";
const LogoSlider = () => {
  const logos = [
    logo1,
    logo2,
    logo3,
    logo4,
    logo5,
    logo6,
    logo7,
    logo8,
    logo9,
    logo11,
    logo24,
    logo25,
    logo26,
    logo27,
    logo28,
    logo30,
    logo10,
    logo12,
    logo13,
    logo14,
    logo15,
    logo16,
    logo17,
    logo18,
    logo19,
    logo29,
    logo21,
    logo22,
    logo23,
  ];

  return (
    <div className="bg-white py-6  w-[90%] mx-auto">
      <Marquee speed={50} pauseOnHover gradient={false}>
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`logo-${index}`}
            className="h-24 w-auto mx-6"
          />
        ))}
      </Marquee>
    </div>
  );
};

export default LogoSlider;
