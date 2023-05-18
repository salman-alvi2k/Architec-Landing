import React from "react";
import { Container, Typography } from "@mui/material";
import House from "../../Lottie/House.json";
import Review from "../../Lottie/Review.json";
import Lottie from "lottie-react";

const BuildingHeader = () => {
  return (
    <Container
      maxWidth="100%"
      sx={{
        display: "flex",
        // backgroundColor: "#afd683",
        borderColor: "#000000",
        // borderRadius: '1rem',
        mt: "2rem",
        justifyContent: 'center',
      }}
    >
      <Container
        sx={{
          width: "50%",
          position: "relative",
          //   marginRight: "10rem",
          marginTop: "3rem",
          zIndex: 1,
          "&:hover": {
            opacity: [0.9, 0.8, 0.7],
          },
        }}
      >
        <Lottie loop={true} animationData={Review} />
      </Container>
      <Container
        sx={{
          width: "100%",
          textAlign: "center",
        }}
      >
        <Typography
          sx={{
            fontSize: "50px",
            fontFamily: "Montserrat",
            marginTop: "3rem",
            "&:hover": {
              opacity: [0.9, 0.8, 0.7],
            },
          }}
        >
          <strong>Architec</strong>
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
          "Building your dream home, with the best  reviewed architects in the business"
        </Typography>
      </Container>
      <Container
        sx={{
          width: "50%",
          position: "relative",
          //   marginRight: "10rem",
          marginTop: "3rem",
          zIndex: 1,
          "&:hover": {
            opacity: [0.9, 0.8, 0.7],
          },
        }}
      >
        <Lottie loop={true} animationData={House} />
      </Container>
    </Container>
  );
};

export default BuildingHeader;
