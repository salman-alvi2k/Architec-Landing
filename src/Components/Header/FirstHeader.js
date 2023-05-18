import React from "react";
import { Container } from "@mui/system";
import { Typography } from "@mui/material";
import Lottie from "lottie-react";
import Typewriter from "typewriter-effect";
import HeaderLottie from "../../Lottie/top_header.json";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import Footer from "../Footer/Footer";

const Header = () => {
  return (
    <Container
      sx={{
        width: "100%",
        height: "50rem",
        display: "flex",
        mb: "2rem",
        mt: "3rem",
        boxShadow: "-1px 2Spx 5px 1px",
        borderRadius: "10px",
        
      }}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          float: "left",
          width: "100%",
          zIndex: 2,
        }}
      >
        <Typography
          sx={{
            width: "100%",
            fontSize: "50px",
            fontFamily: "Montserrat",
            marginTop: "11rem",
            "&:hover": {
              opacity: [0.9, 0.8, 0.7],
            },
          }}
        >
          Welcome To
        </Typography>

        <Typography
          sx={{
            width: "100%",
            float: "left",
            fontSize: "60px",
            fontFamily: "Montserrat",
            "&:hover": {
              opacity: [0.9, 0.8, 0.7],
            },
          }}
        >
          <Typewriter id='first_header_'
            options={{
              autoStart: true,
              loop: true,
              delay: 100,
              strings: [
                "<strong>Architec</strong>",
                "<strong>New Era</strong>",
                "<strong>New Dimension</strong>",
              ],
            }}
          />
        </Typography>

        <Typography
          sx={{
            width: "100%",
            float: "left",
            fontSize: "15px",
            fontFamily: "Montserrat",
            "&:hover": {
              opacity: [0.9, 0.8, 0.7],
            },
          }}
        >
          Sign Up For Free <br />
          & Explore The Biggest Marketplace Of Architectures
          <br />
        </Typography>
        <Button
          variant="contained"
          color="success"
          sx={{
            bgcolor: "success",
            width: "15%",
            position: "absolute",
            marginTop: "25rem",
            fontSize: "1.2rem",
            fontFamily: "Montserrat",
            dropShadow: "1px 2px 3px 3px solid black",
            borderRadius: "1rem",
            "&:hover": {
              opacity: [0.9, 0.8, 0.7],
            },
          }}
        >
          Sign Up
        </Button>
      </Container>

      <Container
        sx={{
          width: "50%",
          position: "absolute",
          marginLeft: "25rem",
          marginTop: "3rem",
          zIndex: 1,
          "&:hover": {
            opacity: [0.9, 0.8, 0.7],
          },
        }}
      >
        <Lottie
          loop={true}
          animationData={HeaderLottie}
          onClick={
            <Link>
              <Footer />
            </Link>
          }
        />
      </Container>
    </Container>
  );
};

export default Header;
