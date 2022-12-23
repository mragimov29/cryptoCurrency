import "./Converter.css";
import { useState, useEffect } from "react";

export default function Converter({ symbol, id }) {
  //https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=0
  const [oneTime, setOneTime] = useState(true);
  const [currency, setCurrency] = useState(null);
  const [first, setFirst] = useState(null);
  const [second, setSecond] = useState(null);
  const [selectValue, setSelectValue] = useState("usd");

  const getData = (vs_currency) => {
    let response = fetch(
      `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=${vs_currency}&days=0`
    );
    let data = response.json();
    return data;
  };

  const getCurrency = (vs_currency) => {
    fetch(
        `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=${vs_currency}&days=0`
      ).then(res=>res.json())
      .then(data => {
        setCurrency(data.prices[0][1]);
      })
    // getData(value)
    //   .then((res) => {
    //     setCurrency(res.prices[0][1]);
    //     console.log('res', res.prices[0][1]);
    //   })
    //   .catch((err) => alert(err));
    // setOneTime(false);
  };

  useEffect(() => {
    if (oneTime) {
      getCurrency(selectValue);
      console.log(currency);
    }
  }, []);

  const firstChange = (e) => {
    setFirst(e.target.value);
    setSecond((e.target.value * currency).toFixed(2));
  };

  const secondChange = (e) => {
    setSecond(e.target.value);
    setFirst((e.target.value / currency).toFixed(2));
  };

  const selectChange = (e) => {
    getCurrency(e.target.value);
    setSelectValue(e.target.value);
    // setSecond((first * currency).toFixed(2));
    secondChange();
  };

  return (
    <div>
      <h3>Converter</h3>
      <div className="converter">
        <div className="first">
          <div className="converter-symbol">{symbol}</div>
          <input value={first} onChange={firstChange} type="number"></input>
        </div>

        <div className="second">
          <select
            value={selectValue}
            onChange={selectChange}
            className="custom-dropdown"
          >
            <option value="usd">USD</option>
            <option value="eur">EUR</option>
            <option value="btc">BTC</option>
            <option value="eth">ETH</option>
            <option value="bnb">BNB</option>
            <option value="bch">BCH</option>
          </select>
          <input
            value={second}
            onChange={secondChange}
            className="second-input"
            type="number"
          ></input>
        </div>
      </div>
    </div>
  );
}
