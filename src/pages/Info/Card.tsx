import React, {useEffect} from "react";
import sl from "./Card.module.css";
import {DayProps} from "./InfoInterfaces";
import AOS from "aos";

export default function Card(props: DayProps) {
  const [day, month] = props.data.dt,
        d = props.data;
  useEffect( () => {
    AOS.init();
    AOS.refresh();
  } )
  return (
    <div data-aos={"zoom-in"} data-aos-duration={"300"} className={sl.container}>
      <h2>{day}/{month}</h2>
      <div>
        <img src={`http://openweathermap.org/img/wn/${d.icon}@2x.png`} alt=""/>
      </div>
      <p>Predicted status: {d.main}</p>
      <p>Daytime temperature: {d.dTemp} C</p>
      <p>Night temperature: {d.nTemp} C</p>
      <p>Humidity: {d.humidity}%</p>
      <p>Clouds: {d.clouds}%</p>
    </div>
  );
}