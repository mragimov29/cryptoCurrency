import { connect } from "react-redux";
import BuySell from "../../components/BuySell/BuySell";
import Favorites from "../../components/Favorites/Favorites";
import Header from "../../components/Header/Header";
import ProfileChart from "../../components/ProfileChart/ProfileChart";
import "./ProfilePage.css";

const mapStateToProps = (state) => {
  return {
    value: state.value,
    favorites: state.favorites,
  };
};

function ProfilePage({ favorites }) {
  if (favorites.length === 0) {
    return (
      <>
        <Header />
        <div className="profile">
          <div className="profile-info">
            <img
              className="profile-img"
              src={localStorage.getItem("photo")}
              alt=""
            ></img>
            <h2>{localStorage.getItem("name")}</h2>
          </div>
        </div>
      </>
    );
  }
  return (
    <div>
      <Header />
      <div className="profile">
        <div className="profile-info">
          <img
            className="profile-img"
            src={localStorage.getItem("photo")}
            alt=""
          ></img>
          <h2>{localStorage.getItem("name")}</h2>
        </div>
        <h2 className="favorite-h2">Favorite coins</h2>
        <div className="profile-f-d-b-s">
          <Favorites />
          {favorites[0].count === 0 ? true : <ProfileChart />}
          <BuySell />
        </div>
      </div>
    </div>
  );
}

export default connect(mapStateToProps)(ProfilePage);
