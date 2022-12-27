import { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { removeFromFavorites } from "../../redux/actions/actions";
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
    window.addEventListener("resize", (e) => {
      if (favorites.length > 2 && e.target.innerWidth <= 550)
        document.querySelector(".favorites").style.overflowY = "scroll";
    });
  });

  if (!favorites) return true;

  return (
    <div className="favorites">
      {favorites.map((data) => {
        return (
          <div className="favorites-li" key={data.data.id}>
            <div className="favorites-info-li">
              <Link to={`/${data.data.id}`}>
                <img
                  className="favorites-img"
                  src={data.data.image.small}
                ></img>
              </Link>
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

export default connect(mapStateToProps)(Favorites);
