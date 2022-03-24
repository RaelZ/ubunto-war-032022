import React, { useEffect, useState } from "react";
import { conectAPI } from "../api/ConectAPI";

export default function Home() {
  const [url, setURL] = useState<any>("");
  useEffect(() => {
    (async function getAll() {
      const {data}: any = await conectAPI.getAll();
      console.log(data[0].url);
      setURL(data[0].url);
    })();
  }, []);
  return (
    <div>
      <img src={url} alt="Elisson"></img>
    </div>
  );
}
