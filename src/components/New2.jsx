import { Box } from "@mui/system";
import { Button, Typography } from "@mui/material";
import React from "react";
import "./new2.css";
import iphone from "./images/iphone.jpg";
import code from "./images/code.jpg";
import kid from "./images/kid.jpg";
import review from "./images/review.jpg";
import review2 from "./images/review2.jpg";
import review3 from "./images/review3.jpg";
import TvIcon from "@mui/icons-material/Tv";

import {
  Facebook,
  Grid4x4,
  Instagram,
  TaskAlt,
  Twitter,
} from "@mui/icons-material";
import Header from "./Header";

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
          Build a landing page for your buisness
          <br />
          or project and generate more leads!
        </h1>
        <h1 className="signupText2">
          Generate more leads with a professional landing Page.
        </h1>
        <Box className="signupInput">
          <input type="text" placeholder="Enter your Email..." name="" id="" />
          <Button variant="contained">Sign up!</Button>
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
          <Box className="heading">Fully Responsive</Box>
          <Typography
            variant="p"
            className="response"
            sx={{ fontFamily: "Lato, sans-serif" }}
          >
            This theme will look greater any
            <br />
            device, no matter the size
          </Typography>
        </Box>
        {/* 2 icon */}
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
          <Box className="heading">Bootstrap 4 Ready</Box>
          <Typography variant="p" className="response">
            Featuring The latest build of the new
            <br />
            Bootstrap 4 framework!
          </Typography>
        </Box>
        {/* 3 icon  */}
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
          <Box className="heading">Easy to Use</Box>
          <Typography variant="p" className="response">
            Ready to use with your own content
            <br />
            or customize the source file
          </Typography>
        </Box>
      </Box>

      <Box className="mainImageContainer">
        <img src={iphone} alt="" className="imageContainer2" />
        <Box className="textContainer">
          <h1 className="headingI">Fully Responsive Design</h1>
          <Box className="description">
            When you use a theme created by Start Bootstrap you know the theme
            will look great on any device, whether it's a phone ,tablet, or
            desktop the page will beheve responsively
          </Box>
        </Box>

        <img src={iphone} alt="" className="imageContainer" />
      </Box>

      <Box className="mainImageContainer">
        <img src={code} alt="" className="imageContainer2" />
        <img src={code} alt="" className="imageContainer" />

        <Box className="textContainer">
          <h1 className="headingI">Updated for Bootstrap 5</h1>
          <Box className="description">
            Newly Improved, and full of great utility classes, Bootstrap 5 is
            leading the way in mobile responsive web development! All of the
            themes on Start Bootstrap are now using Bootstrap 5!
          </Box>
        </Box>
        {/* <img src={code} alt="" className="imageContainer" /> */}
      </Box>

      <Box className="mainImageContainer">
        <img src={kid} alt="" className="imageContainer2" />
        <Box className="textContainer">
          <h1 className="headingI">Easy to Use & Customize</h1>
          <Box className="description">
            Landing Page is just HTML and CSS with splash of SCSS for users who
            demand sone deeper customization options. Out of the box,just add
            your content and images,and your new landing page will be ready to
            go!
          </Box>
        </Box>

        <img src={kid} alt="" className="imageContainer" />
      </Box>

      <Box className="reviewSection">
        <h1 className="reviewSectionHeading">What people are saying...</h1>
        <Box className="allAvatars">
          {/* Avatar 1 */}
          <Box>
            <Box className="avatarContainer">
              <img src={review} className="avatar" alt="Avatar" />
            </Box>
            <h2 className="name">Margaret E.</h2>
            <p className="personReview">
              "This is fantastic! Thanks so much guys"
            </p>
          </Box>
          {/* Avatar 2 */}
          <Box className="mobMargin">
            <Box className="avatarContainer">
              {/* <Avatar
                alt="Remy Sharp"
                src={review2}
                sx={{
                  height: "200px",
                  width: "200px",
                }}
              /> */}
              <img src={review2} className="avatar" alt="Avatar" />
            </Box>
            <h2 className="name">Fref S.</h2>
            <p className="personReview2">
              "Bootstrap is amazing. I've been using it to
              <br />
              create a lot of super nice landing pages"
            </p>
          </Box>
          {/* Avatar 3 */}
          <Box className="mobMargin">
            <Box className="avatarContainer">
              <img src={review3} className="avatar" alt="Avatar" />
            </Box>
            <h2 className="name">Sarah W.</h2>
            <p className="personReview2">
              "Thanks so much guys for making these free
              <br />
              resources availaible for us"
            </p>
          </Box>
        </Box>
      </Box>

      <Box className="askingContainer">
        <h1 className="askingHeading">Ready to get started?Sign up now!</h1>
        <Box className="askingInputAndButton">
          <input type="text" placeholder="Enter your email" name="" id="" />
          <Button variant="contained">Sign up!</Button>
        </Box>
        <Box className="hideIt">
          <Box className="askingInputAndButton2">
            <input
              type="text"
              className="mainLoginInput"
              placeholder="Email Address"
              name=""
              id=""
            />
          </Box>
          <Box className="SButton">
            <Button variant="contained">Submit</Button>
          </Box>
        </Box>
      </Box>

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
    </Box>
  );
};

export default New2;
