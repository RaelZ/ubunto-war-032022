import React from "react";
import Home from "../components/Home";
import { Grid, Typography } from "@mui/material";
import QrCode from "../components/QrCode";

const HomePage: React.FC = () => {
  return (
    <>
      <Grid
        width="100%"
        height="100%"
        display="flex"
        alignItems="center"
        justifyContent="space-around"
        flexDirection="column"
      >
        <Typography variant="h3" sx={{ paddingRight: "10%" }}>
          QR CODE DO ELISSINHO
        </Typography>
        <Grid
          width="100%"
          height="100%"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Home />
          <QrCode />
        </Grid>
      </Grid>
    </>
  );
};

export default HomePage;
