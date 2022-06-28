import React from "react";
import AOS from 'aos';
import {ArrayDay} from "./InfoInterfaces";
import sl from "./Charts.module.css";
import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

Chart.defaults.font = {
  family: 'Staatliches, cursive',
  size: 15,
}

export default function Charts(props: ArrayDay) {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: false,
        text: 'Temperature',
      },
    },
  };
  const labels = props.days.map( day => day.dt.join("/") );
  const data1 = {
    labels,
    datasets: [
      {
        label: 'Daytime Temperature',
        data: props.days.map( day => day.dTemp),
        borderColor: 'rgb(255,207,72)',
        backgroundColor: 'rgba(255,207,72,0.5)',
      },
      {
        label: 'Night Temperature',
        data: props.days.map( day => day.nTemp),
        borderColor: 'rgb(37,40,80)',
        backgroundColor: 'rgba(37,40,80,0.5)',
      },
    ],
  };
  const data2 = {
    labels,
    datasets: [
      {
        label: 'Humidity',
        data: props.days.map( day => day.humidity),
        borderColor: 'rgb(0,127,255)',
        backgroundColor: 'rgba(0,127,255,0.5)',
      },
    ],
  };
  return (
    <div className={sl.container}>
      <div data-aos={"zoom-in"} data-aos-duration={"300"}>
        <h2 className={sl.header}>Temperature</h2>
        <Line options={options} data={data1}/>
      </div>
      <div data-aos={"zoom-in"} data-aos-duration={"300"}>
        <h2 className={sl.header} style={{marginTop: "2em"}}>Humidity</h2>
        <Line options={options} data={data2}></Line>
      </div>
    </div>
  );
}