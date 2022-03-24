import React from "react";
import { Grid } from "@mui/material";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const DashboardLayout: React.FC = () => {
  return (
    <Grid
      display="flex"
      overflow="hidden"
      flexDirection="column"
      width="100vw"
      height="100vh"
    >
      <Header />
      <Outlet />
      <Footer />
    </Grid>
  );
};

export default DashboardLayout;
