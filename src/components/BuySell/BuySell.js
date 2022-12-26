import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { changePrice } from "../../redux/actions/actions";
import "./BuySell.css";

const mapStateToProps = (state) => {
  return {
    favorites: state.favorites,
  };
};

const mapDispatchToProps = (dispatch) => ({
  changePrice: (data) => dispatch(changePrice(data)),
});

function BuySell({ favorites, changePrice }) {
  const [count, setCount] = useState(1);
  const [id, setId] = useState(favorites[0].data.id);
  const [selectBS, setSelectBS] = useState("Buy");

  const inputCount = (e) => {
    setCount(e.target.value.replace(/[^0-9]/g, "").replace(/^0+/, ""));
  };

  const selectCoin = (e) => {
    setId(e.target.value);
  };

  const selectBorS = (e) => {
    setSelectBS(e.target.value);
  };

  const buyOrSellClick = () => {
    if (selectBS === "Buy") {
      favorites.find((e) => e.data.id === id).price += Number(
        document.querySelector(".coins-price").value.substring(1)
      );
      favorites.find((e) => e.data.id === id).count += count;
    } else if (selectBS === "Sell") {
      if (favorites.find((e) => e.data.id === id).count === 0) alert("AAAAAAAAAAAAAAAAAAAAAA!");
      else {
        favorites.find((e) => e.data.id === id).price -= Number(
          document.querySelector(".coins-price").value.substring(1)
        );
        favorites.find((e) => e.data.id === id).count -= count;
      }
    }
  };

  if (!favorites) return true;

  return (
    <div className="buy-sell">
      <select onChange={selectBorS} className="b-or-s-select" value={selectBS}>
        <option value="Buy">Buy</option>
        <option value="Sell">Sell</option>
      </select>
      <br></br>
      <h2>Select coin:</h2>
      <select value={id} onChange={selectCoin} className="buy-sell-select">
        {favorites.map((data) => {
          return (
            <option value={data.data.id}>
              <p>{data.data.name}</p>
              <p>({data.data.symbol.toUpperCase()})</p>
            </option>
          );
        })}
      </select>
      <h2>Coins count:</h2>
      <input
        value={count}
        onChange={inputCount}
        className="coins-count-input"
        placeholder=""
      ></input>
      <h2>Total price: </h2>
      <input
        value={`$${(
          favorites.find((e) => e.data.id === id).data.market_data.current_price
            .usd * count
        ).toFixed(2)}`}
        className={selectBS === "Buy" ? "coins-price green" : "coins-price red"}
        readOnly="true"
      ></input>
      <button onClick={buyOrSellClick} className="b-s-button">
        {selectBS}
      </button>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(BuySell);
