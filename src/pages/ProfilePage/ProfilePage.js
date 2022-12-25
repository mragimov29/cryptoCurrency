import Favorites from "../../components/Favorites/Favorites";
import Header from "../../components/Header/Header";
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
        <Favorites />
      </div>
    </div>
  );
}
