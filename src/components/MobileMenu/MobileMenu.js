import { connect } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import SignInButton from "../SingInButton/SignInButton";
import "./MobileMenu.css";

const mapStateToProps = (state) => {
  return {
    value: state.value,
  };
};

function MobileMenu({ value }) {
  const alertClick = () => {
    alert("You are not signed in");
  };

  return (
    <div className="mobile-menu">
      <Link to="/">
        <button className="header-button">
          <h2>Main Page</h2>
        </button>
      </Link>
      {value ? (
        <Link to="/profile">
          <button className="header-button">
            <h2>Profile</h2>
          </button>
        </Link>
      ) : (
        <button className="header-button" onClick={alertClick}>
          <h2>Profile</h2>
        </button>
      )}
      <div>
        <SignInButton />
      </div>
    </div>
  );
}

export default connect(mapStateToProps)(MobileMenu);
