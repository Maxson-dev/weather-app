import React, {useEffect, useState} from "react";
import sl from "./Info.module.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import qs from 'query-string';
import {Today, APIinfo, Day} from "./InfoInterfaces";
import Current from "./Current";


export default function Info() {
  const [current, setCurrent] = useState({
      temp: 0,
      humidity: 0,
      clouds: 0,
      main: "Clear",
      icon: "01d",
    }),
    [days, setDays] = useState({
      dTemp: 0,
      nTemp: 0,
      humidity: 0,
      main: "",
      icon: "",
    }),
    query = qs.parse(window.location.search),
    {lat, lon, place} = query;

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=6f0d37cdbbd341b7363692cf14172960&exclude=minutely,hourly&units=metric`)
      .then( res => res.json())
      .then( json => {
        const cr = json.current;
        const weather = {
          temp: cr.temp,
          humidity: cr.humidity,
          clouds: cr.clouds,
          main: cr.weather[0].main,
          icon: cr.weather[0].icon
        };
        const els = json.daily.map( (day: APIinfo, i: number) => {
          const info: Day = {
            dTemp: day.temp.day,
            nTemp: day.temp.night,
            humidity: day.humidity,
            main: day.weather.main,
            icon: day.weather.icon,
          }
        });
        setCurrent(weather);
        setDays(els);
      });
    }, []);
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, [])
  return (
    <div>
      <Current weather={current} place={place as string}/>
    </div>
  );
}