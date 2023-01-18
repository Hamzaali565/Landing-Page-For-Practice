import { Avatar, Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import "./index.css";
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

const New = () => {
  return (
    <Box>
      {/* Header */}
      <Box className="headContainer">
        <Typography variant="h6" className="headText">
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
      </Box>

      {/* sign up */}
      <Box className="signupData">
        <Typography variant="h3" className="signupText">
          Build a landing page for your buisness
          <br />
          or project and generate more leads!
        </Typography>
        <Box className="signupInput">
          <input type="text" placeholder="Enter your Email..." name="" id="" />
          <Button variant="contained">Sign up!</Button>
        </Box>
      </Box>

      {/* 3 icons */}
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
          <Typography variant="p" className="response">
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

      {/* images portion */}

      {/* 1 image */}
      <Box className="mainImageContainer">
        <Box className="textContainer">
          <Typography
            variant="h5"
            className="headingI"
            sx={{
              fontFamily: "Lato, sans-serif",
              fontWeight: 700,
              fontSize: "30px",
            }}
          >
            Fully Responsive Design
          </Typography>
          <Box className="description">
            When you use a theme created by Start Bootstrap
            <br />
            you know the theme will look great on any
            <br />
            device, whether it's a phone ,tablet, or desktop the
            <br />
            page will beheve responsively
          </Box>
        </Box>

        <img src={iphone} alt="" className="imageContainer" />
      </Box>
      {/* 2 image */}
      <Box className="mainImageContainer">
        <img src={code} alt="" className="imageContainer" />

        <Box className="textContainer2">
          <Typography
            variant="h5"
            className="headingI"
            sx={{
              fontFamily: "Lato, sans-serif",
              fontWeight: 700,
              fontSize: "30px",
            }}
          >
            Updated for Bootstrap 4
          </Typography>
          <Box className="description">
            Newly Improved, and full of great utility classes,
            <br />
            Bootstrap 4 is leading the way in mobile responsive
            <br />
            web development! All of the themes on Start
            <br />
            Bootstrap are now using Bootstrap 4!
          </Box>
        </Box>
      </Box>
      {/* 3 image */}
      <Box className="mainImageContainer">
        <Box className="textContainer">
          <Typography
            variant="h5"
            className="headingI"
            sx={{
              fontFamily: "Lato, sans-serif",
              fontWeight: 700,
              fontSize: "30px",
            }}
          >
            Easy to Use & Customize
          </Typography>
          <Box className="description">
            Landing Page is just HTML and CSS with splash of
            <br />
            SCSS for users who demand sone deeper
            <br />
            customization options. Outof the box,just add your
            <br />
            content and images,and your new landing page will
            <br />
            be ready to go!
          </Box>
        </Box>

        <img src={kid} alt="" className="imageContainer" />
      </Box>

      {/* What peoples say portion */}
      <Box className="reviewSection">
        <h1 className="reviewSectionHeading">What people are saying...</h1>
        <Box className="allAvatars">
          {/* Avatar 1 */}
          <Box>
            <Box className="avatarContainer">
              <Avatar
                alt="Remy Sharp"
                src={review}
                sx={{
                  height: "200px",
                  width: "200px",
                }}
              />
            </Box>
            <h2 className="name">Margaret E.</h2>
            <p className="personReview">
              "This is fantastic! Thanks so much guys"
            </p>
          </Box>
          {/* Avatar 2 */}
          <Box>
            <Box className="avatarContainer">
              <Avatar
                alt="Remy Sharp"
                src={review2}
                sx={{
                  height: "200px",
                  width: "200px",
                }}
              />
            </Box>
            <h2 className="name">Fref S.</h2>
            <p className="personReview2">
              "Bootstrap is amazing. I've been using it to
              <br />
              create a lot of super nice landing pages"
            </p>
          </Box>
          {/* Avatar 3 */}
          <Box>
            <Box className="avatarContainer">
              <Avatar
                alt="Remy Sharp"
                src={review3}
                sx={{
                  height: "200px",
                  width: "200px",
                }}
              />
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

      {/* Asking again for Signup */}
      <Box className="askingContainer">
        <h1 className="askingHeading">Ready to get started?Sign up now!</h1>
        <Box className="askingInputAndButton">
          <input type="text" placeholder="enter your email" name="" id="" />
          <Button variant="contained">Sign up!</Button>
        </Box>
      </Box>

      {/* footer */}
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
    </Box>
  );
};

export default New;
