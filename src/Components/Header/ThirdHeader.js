import React from "react";
import { Container, Typography } from "@mui/material";
import Chat from "../../Lottie/secureChat.json";
import Lottie from "lottie-react";

const ThirdHeader = () => {
  return (
    <Container
      maxWidth="100%"
      sx={{
        display: "flex",
        // backgroundColor: "#afd683",
        borderColor: "#000000",
        // borderRadius: '1rem',
        mt: "2rem",
      }}
    >
      <Container
        sx={{
          float: "left",
          width: "100%",
          marginLeft: "10rem",
          zIndex: 2,
        }}
      >
        <Typography
          sx={{
            // width: "100%",
            fontSize: "50px",
            fontFamily: "Montserrat",
            marginTop: "12rem",
            "&:hover": {
              opacity: [0.9, 0.8, 0.7],
            },
          }}
        >
          Secure
          <br />
          Chat
        </Typography>

        <Typography
          sx={{
            width: "100%",
            float: "left",
            fontSize: "15px",
            fontFamily: "Montserrat",
            marginBottom: "10rem",
            "&:hover": {
              opacity: [0.9, 0.8, 0.7],
            },
          }}
        >
          Chat with confidence - Our end-to-end encryption keeps your
          conversations private and secure.
        </Typography>
      </Container>
      <Container
        sx={{
          width: "100%",
          position: "relative",
          //   marginRight: "10rem",
          marginTop: "3rem",
          zIndex: 1,
          "&:hover": {
            opacity: [0.9, 0.8, 0.7],
          },
        }}
      >
        <Lottie loop={true} animationData={Chat} />
      </Container>
    </Container>
  );
};

export default ThirdHeader;
