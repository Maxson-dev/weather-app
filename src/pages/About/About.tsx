import React, {useEffect} from "react";
import logo from "../../img/weather.png";
import sl from "./About.module.css";
import AOS from "aos";

export default function About() {
  useEffect( () => {
    AOS.init();
    AOS.refresh();
  }, [] )
  return (
    <div className={sl.container}>
      <img data-aos={"fade-down"} data-aos-duration={"300"} width={"200em"} height={"200em"} src={logo} alt="" className={sl.img}/>
      <h1 data-aos={"fade-up"} data-aos-delay={"300"} data-aos-duration={"300"}>About</h1>
      <h2 data-aos={"fade-up"} data-aos-delay={"600"} data-aos-duration={"300"}>Project made by: <a href={"https://github.com/Maxson-dev"} className={sl.link}>Maxim Shnyagin</a></h2>
      <div>
        <div className={sl.info} data-aos={"fade-up"} data-aos-delay={"900"} data-aos-duration={"300"}>This web application allows you to quickly get information about the weather in any part of the globe.</div>
        <div className={sl.listContainer}>
          <h3 data-aos={"fade-up"} data-aos-delay={"1200"} data-aos-duration={"300"} className={sl.head}>Technologies and resources used:</h3>
          <ul data-aos={"fade-up"} data-aos-delay={"1500"} data-aos-duration={"300"} className={sl.list}>
            <li>TypeScript</li>
            <li>React</li>
            <li>React Routes</li>
            <li>AOS</li>
            <li>Chart.js</li>
            <li>Express</li>
            <li>Open Street map api</li>
            <li>Weather map api</li>
          </ul>
        </div>
      </div>
    </div>
  );
}