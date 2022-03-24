import React from "react";
import { Grid, Typography } from "@mui/material";

const NotFound: React.FC = () => {
  return (
    <Grid
      width="100%"
      height="100%"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Typography>Página não encontrada</Typography>
      <Typography variant="h2">404</Typography>
    </Grid>
  );
};

export default NotFound;
