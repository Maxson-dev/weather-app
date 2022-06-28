import React, {useEffect, useState} from "react";
import sl from "./Info.module.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import qs from 'query-string';
import {Today, APIinfo, Day} from "./InfoInterfaces";
import Current from "./Current";
import {useNavigate} from "react-router-dom";
import Forecast from "./Forecast";
import Card from "./Card";
import Charts from "./Charts";


export default function Info() {
  const navigate = useNavigate();
  const [current, setCurrent] = useState({} as Today),
    [days, setDays] = useState([] as Day[]),
    query = qs.parse(window.location.search),
    {lat, lon, place} = query;

  useEffect(() => {
    try {
      fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=6f0d37cdbbd341b7363692cf14172960&exclude=minutely,hourly&units=metric`)
        .then(res => res.json())
        .then(json => {
          const cr = json.current;
          const weather = {
            temp: cr.temp,
            humidity: cr.humidity,
            clouds: cr.clouds,
            main: cr.weather[0].main,
            icon: cr.weather[0].icon
          };
          let count = [new Date().getDate(), new Date().getMonth()+1];
          const els = json.daily.map((day: APIinfo, i: number) => {
            const date = new Date(new Date().setDate(count[0]++));

            let d = date.getDate().toString().length === 1 ? '0' + date.getDate() : date.getDate(),
                m = date.getMonth().toString().length === 1 ? '0' + date.getMonth() : date.getMonth();

            const info: Day = {
              dt: [d, m],
              dTemp: day.temp.day,
              nTemp: day.temp.night,
              humidity: day.humidity,
              main: day.weather[0].main,
              icon: day.weather[0].icon,
              clouds: day.clouds
            }
            return info;
          });
          setCurrent(weather);
          setDays(els);
        });
    } catch (err) {
      navigate("/wrong", {replace: true});
      console.log(err);
    }
    }, []);

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, [])

  function renderCard(i: number) {
    return (
      <Card key={i} data={days[i]} />
    );
  }
  return (
    <div>
      <div className={sl.container}>
        <button className={sl.back} onClick={() => navigate("/")}><span className={sl.arrow}>&#8592;</span> Check for another place</button>
        <h2 className={sl.location}>Location: {place}</h2>
      </div>
      <Current weather={current} place={place as string}/>
      <Forecast days={days}>
        {days.map( (item, i) => {
          return renderCard(i);
        } )}
      </Forecast>
      <Charts children={""} days={days}/>
    </div>
  );
}
