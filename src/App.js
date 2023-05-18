import "./App.css";
import Appbar from "./Components/Appbar/Appbar";
import Header from "./Components/Header/FirstHeader";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "@mui/system";
import Home from "./Components/Home/Home";

function App() {
  return (
      <Container sx={{
        paddings: 'none',
        margin: 'none',
      }}>
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
