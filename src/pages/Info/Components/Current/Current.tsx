import React, {useEffect} from "react";
import sl from "./Current.module.css";
import {Weather} from "../../InfoInterfaces";
import AOS from "aos";
import 'aos/dist/aos.css';

export default function Current(props: Weather) {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  },[])
  const w = props.weather;
  return (
    <div className={sl.card}>
      <div data-aos={"fade-right"} data-aos-duration={"300"}>
        <h1 className={sl.row1}>Today's Weather</h1>
      </div>
      <div data-aos={"zoom-in"} data-aos-delay={"300"} data-aos-duration={"300"} className={sl.container}>
        <div className={sl.row2}>
          <p>Current Temperature: {w.temp} C</p>
          <p>Humidity: {w.humidity}%</p>
          <p className={sl.last}>Clouds: {w.clouds}%</p>
        </div>
        <div data-aos={"fade-left"} data-aos-delay={"600"} data-aos-duration={"300"}>
          <img className={sl.img} src={`http://openweathermap.org/img/wn/${w.icon}@2x.png`} alt=""/>
          <p className={sl.last}>Current Status: {w.main}</p>
        </div>
      </div>
    </div>
  );
}