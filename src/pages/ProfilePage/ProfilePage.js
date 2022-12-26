import BuySell from "../../components/BuySell/BuySell";
import Favorites from "../../components/Favorites/Favorites";
import Header from "../../components/Header/Header";
import ProfileChart from "../../components/ProfileChart/ProfileChart";
import "./ProfilePage.css";

export default function ProfilePage() {
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
        <ProfileChart />
        <BuySell />
        </div>
      </div>
    </div>
  );
}
