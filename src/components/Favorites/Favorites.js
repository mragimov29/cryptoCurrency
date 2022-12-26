import { useEffect } from "react";
import { connect } from "react-redux";
import "./Favorites.css";

const mapStateToProps = (state) => {
  return {
    favorites: state.favorites,
  };
};

function Favorites({ favorites }) {
  useEffect(() => {
    if (favorites.length > 8)
      document.querySelector(".favorites").style.overflowY = "scroll";
  });

  if (!favorites) return <>NO!</>;

  return (
    <div className="favorites">
      {favorites.map((data) => {
        return (
          <div className="favorites-li">
            <img
              className="favorites-star"
              src={require("../../stars/golden_star.svg").default}
            ></img>
            <div className="favorites-info-li"> 
              <img className="favorites-img" src={data.data.image.small}></img>
              <p>{data.data.name}</p>
              <p>({data.data.symbol.toUpperCase()})</p>
              <p>{data.count}</p>
              <p>${data.price.toFixed(1)}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default connect(mapStateToProps)(Favorites);
