import "./Converter.css";
import { useState, useEffect } from "react";

export default function Converter({ symbol, id }) {
  //https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=0
  const [oneTime, setOneTime] = useState(true);
  const [currency, setCurrency] = useState(null);
  const [first, setFirst] = useState(null);
  const [second, setSecond] = useState(null);
  const [selectValue, setSelectValue] = useState("usd");
  const [go, setGo] = useState(false);

  const getData = async (vs_currency) => {
    let response = await fetch(
      `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=${vs_currency}&days=0`
    );
    let data = response.json();
    return data;
  };

  const getCurrency = (value) => {
    setCurrency(0);
    getData(value)
      .then((res) => {
        setCurrency(res.prices[0][1]);
        
      })
      .catch((err) => alert(err));
    setOneTime(false);
  };

  useEffect(() => {
    if (oneTime) {
      getCurrency(selectValue);
    }
  }, []);

  const firstChange = (e) => {
    let value = e.target.value.replace(/[-]/g, '')
    setFirst(value);
    setSecond((value * currency).toFixed(2));
  };

  const secondChange = (e) => {
    let value = e.target.value.replace(/[-]/g, '')
    setSecond(value);
    setFirst((value / currency).toFixed(2));
  };

  const selectChange = async (e) => {
    getCurrency(e.target.value);
    setSelectValue(e.target.value);
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
