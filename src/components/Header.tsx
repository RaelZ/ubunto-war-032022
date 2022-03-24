import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Grid
      onClick={() => navigate("/")}
      alignItems="center"
      display="flex"
      justifyContent="left"
      minHeight={70}
      bgcolor="red"
      style={{ cursor: 'pointer', paddingLeft: '2em',backgroundImage: 'linear-gradient(360deg, white, red)' }}
    >
      <Box>
        <Typography sx={{ fontSize:'24px', weight: '700' }}>METAVERSO</Typography>
      </Box>
    </Grid>
  );
};

export default Header;
