import React, {ReactPropTypes} from "react";
import sl from "./Wrong.module.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import sadCloud from "../../img/sadCloud.jpg";
import {Link} from "react-router-dom";

export default function Wrong() {
  return (
    <div>
      <div className={sl.wrap}>
        <h1>OOPS!</h1>
        <div>it looks like you entered a non-existent location or there was a network failure. Check the location you entered and <Link className={sl.link} to={"/"}>try again</Link>.</div>
      </div>
      <div>
        <img className={sl.img} src={sadCloud} alt=""/>
      </div>
    </div>
  );
}

