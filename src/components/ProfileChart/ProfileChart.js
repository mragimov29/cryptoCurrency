import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { connect } from "react-redux";
import { useEffect, useState } from "react";
import "./ProfileChart.css";
ChartJS.register(ArcElement, Tooltip, Legend);

const mapStateToProps = (state) => {
  return {
    favorites: state.favorites,
  };
};

function ProfileChart({ favorites }) {
  const [data, setData] = useState(null);
  const [options, setOptions] = useState(null);

  useEffect(() => {
    let label = [],
      percent = [],
      color = [];
    let allCount = 0;

    favorites.map((el) => {
      allCount += el.count;
    });

    favorites.map((el) => {
      label.push(el.data.name);
      percent.push(((el.count / allCount) * 100).toFixed(1));
      color.push("#" + setRandomColor());
    });

    setData({
      labels: label,
      datasets: [
        {
          label: "percent",
          data: percent,
          backgroundColor: color,
          borderColor: color,
          borderWidth: 1,
        },
      ],
    });
    setOptions({
      plugins: {
        legend: {
          display: false,
        },
      },
    });
  }, [favorites]);

  const setRandomColor = () => {
    return Math.floor(Math.random() * 16777215).toString(16);
  };

  if (data === null) return true;

  return (
    <div className="pie-chart">
      <Pie data={data} options={options}/>
    </div>
  );
}

export default connect(mapStateToProps)(ProfileChart);
