import React, {useEffect, useState} from 'react';
import { NavLink } from "react-router-dom";
import logo from "../img/weather.png";
import burg from "../img/menu.png"
import sl from "./Navbar.module.css";


export default function Navbar() {
  const [expand, setExpand] = useState(false);
  const [size, setSize] = useState({width: Infinity, height: Infinity});

  const sizeChecker = () => setSize( {
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight,
  });

  useEffect( () => {
    window.addEventListener("resize", sizeChecker);
    return () => window.removeEventListener("resize", sizeChecker);
  }, [] );

  return (
    <div className={sl.nav}>
      <div className={sl.container}>
        <div className={sl.item}>
          <NavLink to={"/"}>
            <img src={logo} width={'45em'} height={'45em'} alt=""/>
          </NavLink>
        </div>
        <div className={`${sl.menu} ${(expand && size.width < 700)? sl.expand : ''}`}>
          <div className={sl.item}>
            <NavLink className={ ( {isActive} ) => isActive ? `${sl.link} ${sl.active}` : sl.link } to={"/"}>Home</NavLink>
          </div>
          <div className={sl.item}>
            <NavLink className={ ( {isActive} ) => isActive ? `${sl.link} ${sl.active}` : sl.link } to={"/about"}>About</NavLink>
          </div>
        </div>
      </div>
      <button className={sl.burger} onClick={ () => setExpand(!expand)}>
        <img width={'60em'} height={'60em'} src={burg} alt=""/>
      </button>
    </div>
  );
}