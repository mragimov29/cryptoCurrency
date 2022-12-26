import { useEffect } from "react";
import { connect } from "react-redux";
import { removeFromFavorites } from "../../redux/actions/actions";
import "./Favorites.css";

const mapStateToProps = (state) => {
  return {
    favorites: state.favorites,
  };
};

const mapDispatchToProps = (dispatch) => ({
  removeFromFavorites: (id) => dispatch(removeFromFavorites(id)),
});

function Favorites({ favorites, removeFromFavorites }) {
  useEffect(() => {
    if (favorites.length > 8)
      document.querySelector(".favorites").style.overflowY = "scroll";
    if (favorites.length > 2 && window.innerWidth <= 550)
      document.querySelector(".favorites").style.overflowY = "scroll";
  });

  const removeClick = (id) => {
    removeFromFavorites(id);
  };

  if (!favorites) return <>NO!</>;

  return (
    <div className="favorites">
      {favorites.map((data) => {
        return (
          <div className="favorites-li">
            <img
              className="favorites-star"
              src={require("../../stars/golden_star.svg").default}
              onClick={() => {
                removeClick(data.data.id);
              }}
            ></img>
            <div className="favorites-info-li">
              <img className="favorites-img" src={data.data.image.small}></img>
              <div className="favorites-name-symbol">
                <p>{data.data.name}</p>
                <p>({data.data.symbol.toUpperCase()})</p>
              </div>
              <div className="favorites-count-price">
                <p>{data.count}</p>
                <p>${data.price.toFixed(1)}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
