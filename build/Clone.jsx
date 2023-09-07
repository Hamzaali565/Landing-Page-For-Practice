import {
  Button,
  Typography,
  Image,
  Input,
  TextField,
  Avatar,
  ListItem,
  ListItemText,
  List,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import sea from "./images/sea.jpg";
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
const Clone = () => {
  return (
    <Box>
      {/* Header */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          //   mt:"3px",
          // border:"1px solid black",
          height: "50px",
        }}
      >
        <Typography
          variant="h6"
          sx={{ ml: "120px", fontFamily: "Lato, sans-serif", color: "#181819" }}
        >
          Start Bootstrap
        </Typography>
        <Button
          variant="contained"
          sx={{
            mr: "120px",
            fontFamily: "lato, sans-serif",
            textTransform: "none",
            fontSize:"15px"
          }}
        >
          Sign In
        </Button>
      </Box>

      {/* image and search */}
      <Box
        sx={{
          mt: "5px",
        }}
      >
        <img
          src={sea}
          alt=""
          //  width="145.5%"
          width="100%"
          height="600px"
        />
      </Box>

      <Box
        sx={{
          // display:"inline",
          position: "relative",
          top: "-400px",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            // mt:"200px",
            color: "white",
            fontFamily: "Lato, sans-serif",
            fontWeight: 700,
            // fontSize:"20px"
          }}
        >
          Build a landing page for your buisnes
          <br />
          or project and generate more leads!
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            // padding:"10px"
            mt: "40px",
          }}
        >
          <TextField
            sx={{
              width: "500px",
              // height:"10px"
              bgcolor: "white",
              borderRadius: "5px",
            }}
            id="outlined-basic"
            label="Enter your Email..."
            variant="outlined"
          />

          <Button
            variant="contained"
            sx={{
              width: "150px",
              height:"55px",
              ml: "10px",
              fontFamily: "Lato, sans-serif",
            }}
          >
            Sign up!
          </Button>
        </Box>
      </Box>
      {/* icons */}
      <Box
      sx={{
        bgcolor:"#F8F9FA",
        // mb: "120px",
        height:"400px"
        
      }}
      >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          //   mt: "100px",
          ml: "100px",
          mr: "100px",
        //   width:"100%",
          bgcolor:"#F8F9FA"
        }}
      >
        {/* 1 */}
        <Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <TvIcon
              sx={{
                color: "#007BFF",
                fontSize: "100px",
              }}
            />
          </Box>

          <Typography
            variant="h5"
            sx={{
              display: "flex",
              justifyContent: "center",
              mt: "20px",
              fontFamily: "Lato, sans-serif",
              fontWeight:700,
              fontSize:"30px"
            }}
          >
            Fully Reponsive
          </Typography>
          <Typography
            variant="p"
            sx={{
              display: "flex",
              justifyContent: "center",
              mt: "10px",
              color: "#212529",
              fontFamily: "Lato, sans-serif",
              fontWeight:300,
              fontSize:"20px"
            }}
          >
            This theme will look greater any
          </Typography>
          <Typography
            variant="p"
            sx={{
              display: "flex",
              justifyContent: "center",
              mt: "5px",
              fontFamily: "Lato, sans-serif",
              color: "#212529",
              fontWeight:300,
              fontSize:"20px"
            }}
          >
            device, no matter the size
          </Typography>
        </Box>
        {/* 2 */}
        <Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Grid4x4
              sx={{
                color: "#007BFF",
                fontSize: "100px",
              }}
            />
          </Box>

          <Typography
            variant="h5"
            sx={{
              display: "flex",
              justifyContent: "center",
              mt: "20px",
              fontFamily: "Lato, sans-serif",
              fontWeight:700,
              fontSize:"30px"
            }}
          >
            Bootstrap 4 Ready
          </Typography>
          <Typography
            variant="p"
            sx={{
              display: "flex",
              justifyContent: "center",
              mt: "10px",
              color: "#212529",
              fontFamily: "Lato, sans-serif",
              fontWeight:300,
              fontSize:"20px"
            }}
          >
            Featuring The latest build of the new
          </Typography>
          <Typography
            variant="p"
            sx={{
              display: "flex",
              justifyContent: "center",
              mt: "5px",
              color: "#212529",
              fontFamily: "Lato, sans-serif",
              fontWeight:300,
              fontSize:"20px"
            }}
          >
            Bootstrap 4 framework!
          </Typography>
        </Box>
        {/* 3 */}
        <Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              fontFamily: "Lato, sans-serif",
            }}
          >
            <TaskAlt
              sx={{
                color: "#007BFF",
                fontSize: "100px",
              }}
            />
          </Box>

          <Typography
            variant="h5"
            sx={{
              display: "flex",
              justifyContent: "center",
              mt: "20px",
              fontFamily: "Lato, sans-serif",
              fontWeight:700,
              fontSize:"30px"
            }}
          >
            Easy to Use
          </Typography>
          <Typography
            variant="p"
            sx={{
              display: "flex",
              justifyContent: "center",
              mt: "10px",
              color: "#212529",
              fontFamily: "Lato, sans-serif",
              fontWeight:300,
              fontSize:"20px"
            }}
          >
            Ready to use with your own content
          </Typography>
          <Typography
            variant="p"
            sx={{
              display: "flex",
              justifyContent: "center",
              mt: "5px",
              color: "#212529",
              fontFamily: "Lato, sans-serif",
              fontWeight:300,
              fontSize:"20px"
            }}
          >
            or customize the source file
          </Typography>
        </Box>
      </Box>
      </Box>
      {/* images  */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          
        }}
      >
        <Box
          sx={{
            width: "50%",
          }}
        >
          <Typography
            sx={{
              display: "flex",
              justifyContent: "center",
              mt: "27%",
              fontFamily: "Lato, sans-serif",
              fontWeight:700,
              fontSize:"30px",
              mr:"100px"
            }}
            variant="h5"
          >
            Fully Responsive Design
          </Typography>
          <Typography
            sx={{
              display: "flex",
              justifyContent: "center",
              color: "#212529",
              fontFamily: "Lato, sans-serif",
              fontWeight:300,
              fontSize:"20px"
            }}
          >
            When you use a theme created by Start Bootstrap
          </Typography>
          <Typography
            sx={{
              display: "flex",
              justifyContent: "center",
              color: "#212529",
              fontFamily: "Lato, sans-serif",
              fontWeight:300,
              fontSize:"20px",
              mr:"70px"
            }}
          >
            you know the theme will look great on any
          </Typography>
          <Typography
            sx={{
              display: "flex",
              justifyContent: "center",
              color: "#212529",
              fontFamily: "Lato, sans-serif",
              fontWeight:300,
              fontSize:"20px",
            }}
          >
            device, whether it's a phone ,tablet, or desktop the
          </Typography>
          <Typography
            sx={{
              display: "flex",
              justifyContent: "center",
              color: "#212529",
              fontFamily: "Lato, sans-serif",
              fontWeight:300,
              fontSize:"20px",
              mr:"180px"
              
            }}
          >
            page will beheve responsively
          </Typography>
        </Box>
        <img
          src={iphone}
          alt=""
          style={{
            width: "700px",
          }}
        />
      </Box>

      {/* 2 */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <img
          src={code}
          alt=""
          style={{
            width: "650px",
          }}
        />
        <Box
          sx={{
            width: "50%",
          }}
        >
          <Typography
            sx={{
              display: "flex",
              justifyContent: "center",
              mt: "27%",
              fontFamily: "Lato, sans-serif",
              fontWeight:700,
              fontSize:"30px",
              mr:"100px"


            }}
            variant="h5"
          >
            Updated for Bootstrap 4
          </Typography>
          <Typography
            sx={{
              display: "flex",
              justifyContent: "center",
              color: "#212529",
              fontFamily: "Lato, sans-serif",
              fontWeight:300,
              fontSize:"20px",
              mr:"10px"

            }}
          >
            Newly Improved, and full of great utility classes,
          </Typography>
          <Typography
            sx={{
              display: "flex",
              justifyContent: "center",
              color: "#212529",
              fontFamily: "Lato, sans-serif",
              fontWeight:300,
              fontSize:"20px",
              ml:"20px"
              
            }}
          >
            Bootstrap 4 is leading the way in mobile responsive
          </Typography>
          <Typography
            sx={{
              display: "flex",
              justifyContent: "center",
              color: "#212529",
              fontFamily: "Lato, sans-serif",
              fontWeight:300,
              fontSize:"20px",
              mr:"30px"
            }}
          >
            web development! All of the themes on Start
          </Typography>
          <Typography
            sx={{
              display: "flex",
              justifyContent: "center",
              color: "#212529",
              fontFamily: "Lato, sans-serif",
              fontWeight:300,
              fontSize:"20px",
              mr:"90px"

            }}
          >
            Bootstrap are now using Bootstrap 4!
          </Typography>
          <Typography
            sx={{
              display: "flex",
              justifyContent: "center",
              color: "#212529",
              fontFamily: "Lato, sans-serif",
              fontWeight:300,
              fontSize:"20px",
              mr:"285px"
            }}
          >
            be ready to go!
          </Typography>
        </Box>
      </Box>
      {/* 3 */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            width: "50%",
          }}
        >
          <Typography
            sx={{
              display: "flex",
              justifyContent: "center",
              mt: "27%",
              fontFamily: "Lato, sans-serif",
              fontWeight:700,
              fontSize:"30px",
              mr:"100px"
            }}
            variant="h5"
          >
            Easy to Use & Customize
          </Typography>
          <Typography
            sx={{
              display: "flex",
              justifyContent: "center",
              color: "#212529",
              fontFamily: "Lato, sans-serif",
              fontWeight:300,
              fontSize:"20px"
            }}
          >
            Landing Page is just HTML and CSS with splash of
          </Typography>
          <Typography
            sx={{
              display: "flex",
              justifyContent: "center",
              color: "#212529",
              fontFamily: "Lato, sans-serif",
              fontWeight:300,
              fontSize:"20px",
              mr:"80px"
            }}
          >
            SCSS for users who demand sone deeper
          </Typography>
          <Typography
            sx={{
              display: "flex",
              justifyContent: "center",
              color: "#212529",
              fontFamily: "Lato, sans-serif",
              fontWeight:300,
              fontSize:"20px"
            }}
          >
            customization options. Outof the box,just add your
          </Typography>
          <Typography
            sx={{
              display: "flex",
              justifyContent: "center",
              color: "#212529",
              fontFamily: "Lato, sans-serif",
              fontWeight:300,
              fontSize:"20px"
            }}
          >
            content and images,and your new landing page will
          </Typography>
          <Typography
            sx={{
              display: "flex",
              justifyContent: "center",
              color: "#212529",
              fontFamily: "Lato, sans-serif",
              fontWeight:300,
              fontSize:"20px"
            }}
          >
            be ready to go!
          </Typography>
        </Box>
        <img
          src={kid}
          alt=""
          style={{
            width: "700px",
          }}
        />
      </Box>

      {/* Heading & Avatars */}

      <Box>
        {/* step 1 = heading */}

        <Typography
          variant="h4"
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: "100px",
            fontFamily: "Lato, sans-serif",
          }}
        >
          What people are saying...
        </Typography>

        {/* Step 2 = avatar */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            mt: "40px",
            ml: "120px",
            mr: "120px",
          }}
        >
          {/* 1 avatar */}
          <Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Avatar
                alt="Remy Sharp"
                src={review}
                sx={{ height: "200px", width: "200px" }}
              />
            </Box>
            <Typography
              sx={{
                display: "flex",
                justifyContent: "center",
                mt: "10px",
                fontFamily: "Lato, sans-serif",
                fontWeight:700
              }}
              variant="h6"
            >
              Margaret E.
            </Typography>
            <Typography
              sx={{
                display: "flex",
                justifyContent: "center",
                color: "#212529",
                mt: "10px",
                fontFamily: "Lato, sans-serif",
              }}
              variant="p"
            >
              "This is fantastic! Thanks so much guys"
            </Typography>
          </Box>
          {/* 2 avatar */}
          <Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Avatar
                alt="Remy Sharp"
                src={review2}
                sx={{ height: "200px", width: "200px" }}
              />
            </Box>
            <Typography
              sx={{
                display: "flex",
                justifyContent: "center",
                mt: "10px",
                fontFamily: "Lato, sans-serif",
                fontWeight:700
              }}
              variant="h6"
            >
              Fref S.
            </Typography>
            <Typography
              sx={{
                display: "flex",
                justifyContent: "center",
                color: "#212529",
                mt: "10px",
                fontFamily: "Lato, sans-serif",
              }}
              variant="p"
            >
              "Bootstrap is amazing. I've been using it to
            </Typography>
            <Typography
              sx={{
                display: "flex",
                justifyContent: "center",
                color: "#212529",
                fontFamily: "Lato, sans-serif",
              }}
              variant="p"
            >
              create a lot of super nice landing pages"
            </Typography>
          </Box>
          {/* 3 avatar */}
          <Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Avatar
                alt="Remy Sharp"
                src={review3}
                sx={{ height: "200px", width: "200px" }}
              />
            </Box>
            <Typography
              sx={{
                display: "flex",
                justifyContent: "center",
                mt: "10px",
                fontFamily: "Lato, sans-serif",
                fontWeight:700
              }}
              variant="h6"
            >
              Margaret E.
            </Typography>
            <Typography
              sx={{
                display: "flex",
                justifyContent: "center",
                color: "#212529",
                mt: "10px",
                fontFamily: "Lato, sans-serif",
              }}
              variant="p"
            >
              "Thanks so much guys for making thes"e free
            </Typography>
            <Typography
              sx={{
                display: "flex",
                justifyContent: "center",
                color: "#212529",
                fontFamily: "Lato, sans-serif",
              }}
              variant="p"
            >
              resources availaible for us"
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* same image again */}
      <Box
        sx={{
          mt: "100px",
        }}
      >
        <img src={sea} alt="" width="100%" height="350px" />
      </Box>

      {/* again email  */}
      <Box
        sx={{
          position: "relative",
          top: "-270px",
          //   display:"flex",
          //   justifyContent:"center"
        }}
      >
        <Typography
          variant="h4"
          color="#FFFFFF"
          sx={{
            display: "flex",
            justifyContent: "center",
            fontFamily: "Lato, sans-serif",
          }}
        >
          Ready to get started?Sign up now!
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: "30px",
          }}
        >
          <TextField
            sx={{
              width: "500px",
              // height:"10px"
              bgcolor: "white",
            }}
            id="outlined-basic"
            label="Enter your Email..."
            variant="outlined"
          />

          <Button
            variant="contained"
            sx={{
              width: "150px",
              ml: "10px",
              bgcolor: "#007BFF",
              fontFamily: "Lato, sans-serif",
              textTransform: "none",
            }}
          >
            Sign up!
          </Button>
        </Box>
      </Box>

      {/*  */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        {/* details */}
        <Box>
          <List
            sx={{
              display: "flex",
              justifyContent: "space-around",
              color: "#008FFE",
              mr: "300px",
            }}
          >
            <ListItemText primary="About" />
            <ListItemText primary="Contact" sx={{ ml: "20px" }} />
            <ListItemText primary="Terms of use" sx={{ ml: "20px" }} />
            <ListItemText primary="privacy policy" sx={{ ml: "20px" }} />
          </List>
        </Box>
        {/* contact */}
        <Box
          sx={{
            color: "#008FFE",
          }}
        >
          <Facebook sx={{ ml: "20px", fontFamily: "Lato, sans-serif" }} />
          <Twitter sx={{ ml: "20px", fontFamily: "Lato, sans-serif" }} />
          <Instagram sx={{ ml: "20px", fontFamily: "Lato, sans-serif" }} />
        </Box>
      </Box>
      {/*  */}

      <Typography
        variant="p"
        sx={{ ml: "135px", color: "#6C757D", fontFamily: "Lato, sans-serif" }}
      >
        © Your website 2018.All Right Reserved.
      </Typography>
    </Box>
  );
};

export default Clone;
