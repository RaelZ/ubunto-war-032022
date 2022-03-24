import React from "react";
import { Box, Grid, Typography } from "@mui/material";

const Footer: React.FC = () => {
  return (
    <Grid
      alignItems="center"
      display="flex"
      justifyContent="center"
      minHeight={70}
      style={{ backgroundColor: '#f0e1ce', padding: '2em' }}
    >
      <Box>
        <Typography>WebSite criado a fim de insterações visuais com a realidade virtual</Typography>
      </Box>
    </Grid>
  );
};

export default Footer;
