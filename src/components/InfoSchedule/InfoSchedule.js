import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function InfoSchedule({ price, date }) {
  const [dates, setDates] = useState([]);
  // const [flag, setFlag] = useState(true);
  const [data, setData] = useState(null);
  const [options, setOptions] = useState(null);

  let flag = true;
  useEffect(() => {
    if (flag) {
      setDates([]);
      flag = false;
      const date1 = new Date(date);

      for (let i = 0; i < 168; i++) {
        date1.setHours(date1.getHours() - 1);
        // let arrDate = new Date(
        //   `${date.getDay()}.${date.getMonth()} ${date.getHours()}:${date.getMinutes()}`
        // );
        dates.unshift(date1);
      }
      console.log(dates.length);
      setData({
        labels: dates,
        datasets: [
          {
            data: price.price,
            fill: false,
            pointBorderColor: 'transparent',
            pointBackgroundColor: 'transparent',
            backgroundColor: 'rgb(255, 255, 255)', // цвет точек
            borderColor: 'rgb(25, 118, 210)',
          },
        ],
      });
      
      setOptions({
        plugins: {
          legend: {
            display: false,
          },
        },
        maintainAspectRatio: false,
        tooltips: {
          mode: false,
          callbacks: {
            title: function () {},
            label: function () {},
          },
        },
        scales: {
          x: {
            ticks: {
              display: false,
            },
            grid: {
              drawBorder: false,
              display: false,
            },
          },
        },
      });
    }
  }, []);

  if (data === null && options === null && dates.length === 0)
    return <>loading...</>;
    
  return (
    <div className="info-schedule">
        <Line className="schedule" data={data} options={options} />
    </div>
  );
}