import React from "react";
import sl from "./Forecast.module.css";
import {ArrayDay} from "../../InfoInterfaces";

export default function Forecast(props: ArrayDay) {
  return (
    <>
      <h1 className={sl.head}>Forecast</h1>
      <div className={sl.container}>{props.children}</div>
    </>
  );
}