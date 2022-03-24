import React from "react";
import Home from '../components/Home';
import { Grid, Typography } from "@mui/material";

const HomePage: React.FC = () => {
  return (
    <>
      <Grid
        width="100%"
        height="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Typography>Let's game start!</Typography>
        <Home />
      </Grid>
    </>
  );
};

export default HomePage;
