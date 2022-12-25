import { useEffect } from "react";
import { connect } from "react-redux";
import "./Favorites.css"

const mapStateToProps = (state) => {
  return {
    favorites: state.favorites,
  };
};

function Favorites({ favorites }) {
  useEffect(() => {
    console.log(favorites);
  });

  if (!favorites) return <>NO!</>;

  return (
    <div className="favorites">
      {favorites.map((data) => {
        return (
          <div className="favorites-li">
            <img className="favorites-star" src={require("../../stars/golden_star.svg").default}></img>
            <img className="favorites-img" src={data.image.small}></img>
            <p>{data.name}</p>
            <p>({data.symbol.toUpperCase()})</p>
          </div>
        );
      })}
    </div>
  );
}

export default connect(mapStateToProps)(Favorites);
