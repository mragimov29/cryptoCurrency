import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Line } from "react-chartjs-2";
import { createDates } from "../../redux/actions/actions";

const mapDispatchToProps = (dispatch) => ({
  createDates: (date, price) => dispatch(createDates(date, price)),
});

const mapStateToProps = (state) => {
  return {
    dates: state.dates,
  };
};

function TableSchedule({ price, id, date, dates, createDates }) {
  useEffect(() => {
      createDates(date, price);
  }, [dates]);

  // const data = {
  //   label: dates,
  // };
  return <p></p>;
  // return <Line data={data} options={options} />;
}

export default connect(mapStateToProps, mapDispatchToProps)(TableSchedule);
