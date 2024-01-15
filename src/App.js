import React, { useEffect } from "react";
import "./App.css";

import Header from "./Components/Header/FirstHeader";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "@mui/system";
import Home from "./Components/Home/Home";
import markerSDK from "@marker.io/browser";

function App() {
  useEffect(() => {
    const setupMarkerIO = async () => {
      const widget = await markerSDK.loadWidget({ project: "abcd1234567890" });
      widget.show();
    };

    setupMarkerIO();
  }, []);

  return (
    <Container
      sx={{
        paddings: "none",
        margin: "none",
      }}
    >
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Header" element={<Header />} />
        </Routes>
      </Router>
    </Container>
  );
}

export default App;
