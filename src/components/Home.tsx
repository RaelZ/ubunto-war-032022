import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { conectAPI } from "../api/ConectAPI";

export default function Home() {
  const [url, setURL] = useState<any>("");

  useEffect(() => {
    (async function getAll() {
      const { data }: any = await conectAPI.getAll();
      const react = data.find((find: any) => find.react === true);
      if (react) setURL(react.url);
      else setURL("");
      console.log(react)
    })();
    setInterval(() => {
      (async function getAll() {
        const { data }: any = await conectAPI.getAll();
        const react = data.find((find: any) => find.react === true);
        if (react) setURL(react.url);
        else setURL("");
      })();
    }, 15000);
  }, []);

  return (
    <Grid width="100%" height="100%" display="flex" justifyContent="center">
      {url !== "" && <img src={url} alt="Elisson" />}
    </Grid>
  );
}
