import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Line } from "react-chartjs-2";
import { createDates } from "../../redux/actions/actions";

// const mapDispatchToProps = (dispatch) => ({
//   createDates: (date, price) => dispatch(createDates(date, price)),
// });

// const mapStateToProps = (state) => {
//   return {
//     dates: state.dates,
//   };
// };

export default function TableSchedule({ price, id, date }) {
  const [dates, setDates] = useState([]);
  const [flag, setFlag] = useState(true);

  useEffect(() => {
    if(flag) {
      const date1 = new Date(date);

      for (let i = 0; i < price.price.length; i++) {
        date1.setHours(date1.getHours() - 1);
        // let arrDate = new Date(
        //   `${date.getDay()}.${date.getMonth()} ${date.getHours()}:${date.getMinutes()}`
        // );
        dates.unshift(date1);
      }
  
      console.log(id, dates);
      setFlag(false);
    }
  });

  // const data = {
  //   label: dates,
  // };
  return <p></p>;
  // return <Line data={data} options={options} />;
}

// export default connect(mapStateToProps, mapDispatchToProps)(TableSchedule);
