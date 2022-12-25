import { useEffect, useState } from "react";
import { connect } from "react-redux";
import "./BuySell.css"

const mapStateToProps = (state) => {
  return {
    favorites: state.favorites,
  };
};

function BuySell({ favorites }) {
  const [count, setCount] = useState(0);
  const [id, setId]= useState(favorites[0].data.id);

  const inputCount = (e) => {
    setCount(e.target.value.replace(/[^0-9]/g, ''));
  }

  return (
    <div className="buy-sell">
      <select className="buy-sell-select">{favorites.map(data => {
        return <option>
            <p>{data.data.name}</p>
            <p>({data.data.symbol.toUpperCase()})</p>
        </option>
      })}</select>
      <input value={count} onChange={inputCount} className="coins-count-input" placeholder="Coins count"></input>
      <p className="coins-price">${favorites.find(e => e.data.id === id).data.market_data.current_price.usd*count}</p>
    </div>
  );
}

export default connect(mapStateToProps)(BuySell);
