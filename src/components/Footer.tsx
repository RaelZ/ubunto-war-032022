import React from "react";
import { Grid, Typography } from "@mui/material";

const Footer: React.FC = () => {
  return (
    <Grid
      alignItems="center"
      display="flex"
      justifyContent="center"
      minHeight={70}
      style={{ backgroundImage: 'linear-gradient(180deg, white, red)' }}
    >
      <Typography>METAVERSO</Typography>
    </Grid>
  );
};

export default Footer;
