import React from "react";
import { useState } from "react";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Avatar } from "@mui/material";

const Theme = () => {
  const [light, setLight] = useState(true);

  const themeLight = createTheme({
    palette: {
      background: {
        default: "#bedd9a",
      },
    },
  });

  const themeDark = createTheme({
    palette: {
      background: {
        default: "#222222",
      },
      text: {
        primary: "#bedd9a",
      },
      divider: {
        primary: "#bedd9a",
      },
    },
  });

  return (
    <ThemeProvider theme={light ? themeLight : themeDark}>
      <CssBaseline />
      <Avatar
        onClick={() => setLight((prev) => !prev)}
        sx={{
          float: "right",
          color: "#bedd9a",
          width: "3rem",
          height: "3rem",
          backgroundColor: "#000000",
        }}
      >
        <DarkModeIcon />
      </Avatar>
    </ThemeProvider>
  );
};

export default Theme;
