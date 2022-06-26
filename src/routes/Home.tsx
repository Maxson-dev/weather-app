import React, {FormEvent, ReactPropTypes, useEffect, useState} from 'react';
import styles from './Home.module.css';
import logo from '../img/weather.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useNavigate} from "react-router-dom";


const configAOS = {
  duration: 500,
  once: true,
}

export let coords = {lat: '0', lon: '0'};

export default function Home() {
  useEffect( () => {
    AOS.init(configAOS);
    AOS.refresh();
  }, [] );
  const [location, setLocation] = useState('');

  const handleSubmit =  async (evt: FormEvent) => {
    evt.preventDefault();
    try {
      const res = await fetch( `https://nominatim.openstreetmap.org/search?q=${location}&format=json&limit=1&accept-language=en`);
      const geoInfo = await res.json();
      if (!geoInfo.length) navigate('/wrong');
      else {
        const {lat, lon} = geoInfo[0];
        navigate(`/info?place=${location}&lat=${lat}&lon=${lon}`, {replace: true});
      }
    } catch (err) {
      navigate('/wrong');
      console.log(err);
    }
  }

  const navigate = useNavigate();
  return (
    <div className={styles.homePage}>
      <div data-aos='fade-down'>
        <img src={logo} width={'200em'} height={'200em'} alt=""/>
      </div>
      <h1 data-aos='fade-up' data-aos-delay="500" data-aos-duration="500">Weather</h1>
      <h2 data-aos='fade-up' data-aos-delay="1000" data-aos-duration="500">The most accurate weather forecast</h2>
      <form onSubmit={handleSubmit} data-aos='zoom-in' data-aos-delay="1500" data-aos-duration="500">
        <input name={"location"} className={styles.input} type="text" placeholder={"Enter location"} value={location} onChange={ (evt) => setLocation(evt.target.value)}/>
        <input className={styles.btn} type="submit" value="Get forecast"/>
      </form>
    </div>
  );
}