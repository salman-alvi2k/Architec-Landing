import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandCircleDownRounded";

const FAQs = () => {
  return (
    <Grid
      container
      spacing={3}
      sx={{
        width: "100%",
        justifyContent: "center",
        mt: "2rem",
        mb: "2rem",
      }}
    >
      <Typography
        sx={{
          mr: 2,
          display: { xs: "none", md: "flex" },
          fontFamily: "Montserrat",
          fontWeight: 700,
          fontSize: "2rem",
          letterSpacing: ".1rem",
          color: "black",
          textDecoration: "none",
        }}
      >
        <strong>FAQs</strong>
      </Typography>
      <Grid item width="100%" >
        <Accordion
          sx={{
            maxWidth: "100%",
            boxShadow: 4,
            backgroundColor: "#bedd9a",
          }}
        >
          <AccordionSummary
            expandIcon={
              <ExpandMoreIcon
                sx={{
                  color: "#00000",
                }}
              />
            }
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography
              sx={{
                fontSize: "20px",
                fontWeight: "1rem",
              }}
            >
              What is Architec?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Container
              sx={{
                display: "flex",
              }}
            >
              <Container
                maxWidth="100%"
                sx={{
                  display: "block",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "1rem",
                    color: "#00000",
                    marginBottom: "5rem",
                  }}
                >
                  Architec is an application that enables architects and
                  designers to create and manage digital design plans,
                  collaborate with team members and clients, and share their
                  work with others
                </Typography>
              </Container>
            </Container>
          </AccordionDetails>
        </Accordion>
      </Grid>
      {/* /////////////////////////////////////////////////////////////////////////// */}
      <Grid item width="100%" sx={{ justifyContent: "center" }}>
        <Accordion
          sx={{
            maxWidth: "100%",
            boxShadow: 4,
            backgroundColor: "#bedd9a",
          }}
        >
          <AccordionSummary
            expandIcon={
              <ExpandMoreIcon
                sx={{
                  color: "#00000",
                }}
              />
            }
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography
              sx={{
                fontSize: "20px",
                fontWeight: "1rem",
              }}
            >
              What types of design plans can I create with Architec?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Container
              sx={{
                display: "flex",
              }}
            >
              <Container
                maxWidth="100%"
                sx={{
                  display: "block",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "1rem",
                    color: "#00000",
                    marginBottom: "5rem",
                  }}
                >
                  Architec supports a variety of design plans including floor
                  plans, blueprints, 3D models, and renderings.
                </Typography>
              </Container>
            </Container>
          </AccordionDetails>
        </Accordion>
      </Grid>
      {/* /////////////////////////////////////////////////////////////////////////// */}
      <Grid item width="100%" sx={{ justifyContent: "center" }}>
        <Accordion
          sx={{
            maxWidth: "100%",
            boxShadow: 4,
            backgroundColor: "#bedd9a",
          }}
        >
          <AccordionSummary
            expandIcon={
              <ExpandMoreIcon
                sx={{
                  color: "#00000",
                }}
              />
            }
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography
              sx={{
                fontSize: "20px",
                fontWeight: "1rem",
              }}
            >
              Is my data secure in Architec?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Container
              sx={{
                display: "flex",
              }}
            >
              <Container
                maxWidth="100%"
                sx={{
                  display: "block",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "1rem",
                    color: "#00000",
                    marginBottom: "5rem",
                  }}
                >
                  Yes, Architec uses industry-standard security protocols to
                  protect your data and ensure that it is only accessible to
                  authorized users.
                </Typography>
              </Container>
            </Container>
          </AccordionDetails>
        </Accordion>
      </Grid>
      {/* /////////////////////////////////////////////////////////////////////////// */}
      <Grid item width="100%" sx={{ justifyContent: "center" }}>
        <Accordion
          sx={{
            maxWidth: "100%",
            boxShadow: 4,
            backgroundColor: "#bedd9a",
          }}
        >
          <AccordionSummary
            expandIcon={
              <ExpandMoreIcon
                sx={{
                  color: "#00000",
                }}
              />
            }
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography
              sx={{
                fontSize: "20px",
                fontWeight: "1rem",
              }}
            >
              Is there a mobile app for Architec?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Container
              sx={{
                display: "flex",
              }}
            >
              <Container
                maxWidth="100%"
                sx={{
                  display: "block",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "1rem",
                    color: "#00000",
                    marginBottom: "5rem",
                  }}
                >
                  Architec is available as a mobile-based and can be accessed
                  on any device with an internet connection. However, there is
                  currently no mobile app for Architec.
                  You can download it from play store and app store.
                </Typography>
              </Container>
            </Container>
          </AccordionDetails>
        </Accordion>
      </Grid>
    </Grid>
  );
};

export default FAQs;
