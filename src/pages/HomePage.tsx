import React from "react";
import { Grid, Typography } from "@mui/material";

const HomePage: React.FC = () => {
  return (
    <Grid
      width="100%"
      height="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Typography>Let's game start!</Typography>
    </Grid>
  );
};

export default HomePage;
