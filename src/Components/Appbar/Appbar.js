import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import logo from "../../Assets/logo.png";
import Theme from "../../Theme";
const pages = ["Home", "FAQs", "About Us", "Contact Us"];

const Appbar = () => {

  return (
    <AppBar
      position="sticky"
      sx={{
        bgcolor: "#bedd9a",
        width: "100%",
        dropShadow: "1px 2px 1px 1px solid black",
        borderRadius: "1.5rem",
        mb: "1rem",
      }}
    >
      <Container>
        <Toolbar disableGutters>
          <IconButton size="large" edge="start" color="inherit">
            <img alt="img" src={logo} width="100px" />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "Montserrat",
              fontWeight: 700,
              letterSpacing: ".1rem",
              color: "black",
              textDecoration: "none",
            }}
          >Architec</Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex", justifyContent: "center" },
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                sx={{ my: 2, color: "black", display: "block", fontSize: "1rem" }}
              >
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to={`/${page}`}
                >
                  {page}
                </Link>
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Button
              variant="contained"
              color="success"
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                bgcolor: "success",
                borderRadius: "0.8rem",
              }}
            >
              Sign Up
            </Button>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
            ></Menu>
          </Box>
          <Box sx={{ flexGrow: 0, ml: 2 }}>
            <Theme />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Appbar;
