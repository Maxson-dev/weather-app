import React, {useEffect} from "react";
import sl from "./Current.module.css";
import {Weather} from "./InfoInterfaces";
import AOS from "aos";
import 'aos/dist/aos.css';

export default function Current(props: Weather) {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  },[])
  // data-aos='fade-up' data-aos-delay="500" data-aos-duration="500"
  const w = props.weather;
  return (
    <div className={sl.card}>
      <div data-aos={"fade-right"} data-aos-duration={"500"}>
        <h1 className={sl.row1}>Today's Weather</h1>
      </div>
      <div className={sl.container}>
        <div className={sl.row2}>
          <p data-aos={"fade-up"} data-aos-delay={"500"} data-aos-duration={"500"}>Current Temperature: {w.temp} C</p>
          <p data-aos={"fade-up"} data-aos-delay={"1000"} data-aos-duration={"500"}>Humidity: {w.humidity}%</p>
          <p data-aos={"fade-up"} data-aos-delay={"1500"} data-aos-duration={"500"} className={sl.last}>Clouds: {w.clouds}%</p>
        </div>
        <div data-aos={"fade-left"} data-aos-delay={"2000"} data-aos-duration={"500"}>
          <img className={sl.img} src={`http://openweathermap.org/img/wn/${w.icon}@2x.png`} alt=""/>
          <p className={sl.last}>Current Status: {w.main}</p>
        </div>
      </div>
    </div>
  );
}