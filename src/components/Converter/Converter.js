import "./Converter.css";

export default function Converter({ symbol }) {
  return (
    <div>
      <h3>Converter</h3>
      <div className="converter">
        <div className="first">
          <div className="converter-symbol">{symbol}</div>
          <input type="number"></input>
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
