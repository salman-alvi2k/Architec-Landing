import React from "react";
import Divider from "@mui/material/Divider";
import Appbar from "../Appbar/Appbar";
import FirstHeader from "../Header/FirstHeader";
import SecondHeader from "../Header/SecondHeader";
import ThirdHeader from "../Header/ThirdHeader";
import BuildingHeader from "../Header/BuildingHeader";
import FAQs from "../FAQs/FAQs";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <>
      <Appbar />
      <FirstHeader />
      <Divider />
      <BuildingHeader />
      <Divider />
      <SecondHeader />
      <Divider />
      <ThirdHeader />
      <Divider />
      <FAQs />
      <Divider />
      <Footer/>
      <Divider />
    </>
  );
};

export default Home;
