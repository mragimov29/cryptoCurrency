import Header from "../../components/Header/Header";
import "./ProfilePage.css";

export default function ProfilePage() {
  return (
    <div className="profile">
      <Header />
      <div className="profile-info">
        <img className="profile-img"
          src={localStorage.getItem("photo")}
          alt=""
        ></img>
        <h2>{localStorage.getItem("name")}</h2>
      </div>
    </div>
  );
}
