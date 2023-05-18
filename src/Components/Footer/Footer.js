import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        backgroundColor: "#222222",
        paddingTop: "1rem",
        paddingBottom: "1rem",
        mt: "2rem",
      }}
    >
      <Container maxWidth="lg">
        <Grid container direction="column" alignItems="center">
          <Grid item xs={12}>
            <Typography color="#bedd9a" variant="h5">
              Architec
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography color="#bedd9a" variant="subtitle1">
              {`${new Date().getFullYear()} | Architec`}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;