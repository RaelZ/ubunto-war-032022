import React from "react";
import Home from '../components/Home';
import { Grid } from "@mui/material";
import QrCode from '../components/QrCode';

const HomePage: React.FC = () => {
  return (
    <>
      <Grid
        width="100%"
        height="100%"
        display="flex"
        alignItems="center"
        justifyContent="space-around"
      >
        <Home />
        <QrCode />
      </Grid>
    </>
  );
};

export default HomePage;
