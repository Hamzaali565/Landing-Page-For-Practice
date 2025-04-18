import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Box } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <div>
      <Box className="footerDataContainer">
        <Box className="bulletPointsAndCR">
          <ul className="bulletPoints">
            <li>About</li>
            <li>Contact</li>
            <li>Terms of Use</li>
            <li>Privacy Policy</li>
          </ul>
          <p className="CR">© Your website 2018.All Right Reserved.</p>
        </Box>
        <Box className="iconsContainer">
          <span>
            <Facebook sx={{ fontSize: "40px" }} />
          </span>
          <span>
            <Twitter sx={{ fontSize: "40px" }} />
          </span>
          <span>
            <Instagram sx={{ fontSize: "40px" }} />
          </span>
        </Box>
      </Box>

      <Box className="footerDataContainer2">
        <Box className="bulletPointsAndCR2">
          <ul className="bulletPoints2">
            <li>About</li>
            <li>Contact</li>
            <li>Terms of Use</li>
            {/* <li></li> */}
          </ul>
          <p className="pp">Privacy Policy</p>
          <p className="CR2">© Your website 2018.All Right Reserved.</p>
        </Box>
        <Box className="iconsContainer2">
          <span>
            <Facebook sx={{ fontSize: "30px" }} />
          </span>
          <span>
            <Twitter sx={{ fontSize: "30px" }} />
          </span>
          <span>
            <Instagram sx={{ fontSize: "30px" }} />
          </span>
        </Box>
      </Box>
    </div>
  );
};

export default Footer;
