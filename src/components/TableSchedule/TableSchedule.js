import { Chart } from "chart.js";
import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";

export default function TableSchedule({ price, id, date }) {
  // const [dates, setDates] = useEffect([]);

  useEffect(() => {
    let dates_ = [];
    let date = new Date("2022-12-22T20:02:49Z");
    for (let i = 0; i < price.length; i++) {
      date.setHours(date.getHours() - 1);
      let arrDate = new Date(
        `${date.getDay()}.${date.getMonth()} ${date.getHours()}:${date.getMinutes()}`
      );
      dates_.unshift(arrDate);
    }
    console.log(dates_);
  });

  // const data = {
  //   label: dates,
  // };
  return <p></p>;
  // return <Line data={data} options={options} />;
}
