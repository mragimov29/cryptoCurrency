import "./Converter.css";
import { useState, useEffect } from "react";

export default function Converter({ symbol, id }) {
  //https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=0
  const [oneTime, setOneTime] = useState(true);
  const [currency, setCurrency] = useState(null);

  const getData = async (vs_currency) => {
    let response = await fetch(
      `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=${vs_currency}&days=0`
    );
    let data = response.json();
    return data;
  };

  const getCurrency = () => {
    getData('usd')
    .then((res) => {
      setCurrency(res.prices[0][1]);
    })
    .catch((err) => alert(err));
    setOneTime(false);
  }

  useEffect(() => {
    if (oneTime) {
        getCurrency();
    }
  }, []);
  const firstChange = (e) => {
    console.log('sss');
    console.log(e.target.value*currency);
  }


  return (
    <div>
      <h3>Converter</h3>
      <div className="converter">
        <div className="first">
          <div className="converter-symbol">{symbol}</div>
          <input onChange={firstChange} type="number"></input>
        </div>

        <div className="second">
          <select className="custom-dropdown">
            <option value="USD" selected="selected">
              USD
            </option>
            <option value="EUR">EUR</option>
            <option value="BTC">BTC</option>
            <option value="CPP">ETC</option>
            <option value="CPP">BNB</option>
            <option value="CPP">BCH</option>
          </select>
          <input type="number"></input>
        </div>
      </div>
    </div>
  );
}
