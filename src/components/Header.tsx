import React from "react";
import { Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Grid
      onClick={() => navigate("/")}
      alignItems="center"
      display="flex"
      justifyContent="center"
      minHeight={70}
      bgcolor="red"
      style={{ cursor: 'pointer', backgroundImage: 'linear-gradient(360deg, white, red)' }}
    >
      <Typography>METAVERSO</Typography>
    </Grid>
  );
};

export default Header;
