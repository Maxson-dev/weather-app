import React, {ReactPropTypes, useEffect, useState} from "react";
import sl from "./Info.module.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import qs from 'query-string';
import {Current, APIinfo, Day} from "./InfoInterfaces";

export default function Info() {
  const init: Current = {
    temp: 20,
    humidity: 10,
    clouds: 0,
    main: "Clear",
    icon: "01d"
  },
    [current, setCurrent] = useState(init),
    [days, setDays] = useState(),
    query = qs.parse(window.location.search),
    {lat, lon, place} = query;

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=86705b4c1182eb1c69f28eb8c520e20&exclude=minutely,hourly&units=metric`)
      .then( res => res.json())
      .then( json => {
        const cr = json.current;
        const weather = {
          temp: cr.temp,
          humidity: cr.humidity,
          clouds: cr.clouds,
          main: cr.weather.main,
          icon: cr.weather.icon
        };
        const els = json.map( (day: APIinfo, i: number) => {
          const info: Day = {
            dTemp: day.temp.day,
            nTemp: day.temp.night,

          }
        });
        setCurrent(weather);
      } );
  } );

  return (
    <div>
      <Current weather={current}/>
    </div>
  );
}