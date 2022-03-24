import { Grid } from "@mui/material";
import React from "react";
import { qrCode } from "../images";

const QrCode: React.FC = () => {
  return <Grid width="100%" display="flex" justifyContent="center"><img width={520} src={qrCode} alt="qrcode" /></Grid>;
};

export default QrCode;
