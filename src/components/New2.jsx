import { Box } from "@mui/system";
import { Button, Typography } from "@mui/material";
import React from "react";
import "./new2.css";
import TvIcon from "@mui/icons-material/Tv";
import working from "./images/Working.jpg";
import tonners from "./images/tonners.jpg";
import printer from "./images/printer-print.jpg";
import {
  Facebook,
  Grid4x4,
  Instagram,
  TaskAlt,
  Twitter,
} from "@mui/icons-material";
import Header from "./Header";
import Testimonal from "./Testimonal";
import LogoSlider from "./LogoSlider";
import NewFooter from "./NewFooter";

const New2 = () => {
  return (
    <Box>
      {/* <Box className="headContainer">
        <Typography
          variant="h6"
          className="headText"
          sx={{ fontFamily: "Lato, sans-serif" }}
        >
          Start Bootstrap
        </Typography>
        <Button
          variant="contained"
          className="headButton"
          sx={{
            textTransform: "none",
            bgcolor: "#007bff",
          }}
        >
          Sign In
        </Button>
      </Box> */}
      <Header />
      <Box className="signupData">
        <h1 className="signupText">
          European Office Supplies Ltd.
          <br />
          EOS is proud to celebrate 14 Years in business supplying printer
          consumables exclusive to trade.
        </h1>
        <h1 className="signupText2">European Office Supplies Ltd.</h1>
        <Box className="signupInput">
          <input type="text" placeholder="Enter your Email..." name="" id="" />
          <Button variant="contained">Submit Email!</Button>
        </Box>
        <Box className="resMob">
          <Box className="resMobInp">
            <input
              class="mainLoginInput"
              type="text"
              placeholder="Email Address"
              name=""
              id=""
            />
          </Box>
          <Box className="resMobButton">
            <Button variant="contained">Submit</Button>
          </Box>
        </Box>
      </Box>

      <div className="text-center text-3xl font-bold mt-11 underline heading">
        PRODUCTS AND SERVICES
      </div>
      <Box className="threeIconsContainer">
        {/* 1 icon */}
        <Box>
          <Box className="icons">
            <TvIcon
              className="icons2"
              sx={{
                color: "#007BFF",
                fontSize: "80px",
              }}
            />
          </Box>
          <Box className="heading">Our wide range of products include</Box>
          <Typography
            variant="p"
            className="response"
            sx={{ fontFamily: "Lato, sans-serif" }}
          >
            {/* This theme will look greater any
            <br />
            device, no matter the size */}
            <div>
              Franking Machine Cartridges, <br />
              Fuser Units and Maintenance Kits, <br />
              Laser Toners, Inkjets Ink, <br /> Tanks Labels
            </div>
          </Typography>
        </Box>
        {/* 2 icon */}

        <Box>
          <Box className="icons">
            <TaskAlt
              className="icons2"
              sx={{
                color: "#007BFF",
                fontSize: "80px",
              }}
            />
          </Box>
          <Box className="heading">Laser Toner Cartridges</Box>
          <Typography variant="p" className="response">
            The Company supplies a wide range <br />
            of products, including Laser Toners <br /> and ink-jet cartridges,
            typewriter <br /> and printer ribbons, wax sticks, thermal <br />
            transfer ribbons and postal <br /> franking machine cartridges.
          </Typography>
        </Box>
        {/* 3 icon  */}
        <Box>
          <Box className="icons">
            <Grid4x4
              className="icons2"
              sx={{
                color: "#007BFF",
                fontSize: "80px",
              }}
            />
          </Box>
          <Box className="heading">Why buy from us</Box>
          <Typography variant="p" className="response">
            Competitively Priced, <br />
            High Quality, Next Day Delivery, <br /> 3 Years Warranty on Toners
          </Typography>
        </Box>
      </Box>

      {/* 3 boxes */}

      <Testimonal
        imageUrl={printer}
        heading={"Franking Machine Cartridges"}
        description={
          "Our franking machine cartridge are of particular significance in our range of compatible products. The products are of great quality and provide highly significant cost saving to the end users along with attractive margin opportunities to our dealers. All our products come with a two year warranty and full indemnity against any patent infringement claims."
        }
      />
      <Testimonal
        Newstyle={"lg:flex-row-reverse"}
        imageUrl={tonners}
        heading={"Laser Toner Cartridges"}
        description={
          "The Company supplies a wide range of products, including Laser Toners and ink-jet cartridges, typewriter and printer ribbons, wax sticks, thermal transfer ribbons and postal franking machine cartridges."
        }
      />
      <Testimonal
        imageUrl={working}
        heading={"After Sales Service"}
        description={
          "We are committed to provide excellent customer service to our customers. Therefore we provide 2 years warranty on all our products."
        }
      />
      <div>
        <h1 className="text-center text-[40px] my-4 font-bold underline">
          Our Brands
        </h1>
        <LogoSlider />

        <p className="w-[70%] text-xl mx-auto text-justify text-gray-500 my-5">
          We are constantly looking to expand our product range and services to
          our customer. Please call us for a product you can not find in our
          range. We would be more than happy to help you. We deliver nationwide
          with variety of couriers. Our major delivery partner is FedEx for next
          day delivery.
        </p>
      </div>

      <NewFooter />
    </Box>
  );
};

export default New2;
