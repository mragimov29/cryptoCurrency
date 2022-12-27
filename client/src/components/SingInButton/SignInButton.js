import { signInWithPopup } from "firebase/auth";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth, provider } from "../..";
import { initFavorites, setAcc } from "../../redux/actions/actions";

const mapStateToProps = (state) => {
  return {
    value: state.value,
  };
};

const mapDispatchToProps = (dispatch) => ({
  setAcc: (value) => dispatch(setAcc(value)),
  initFavorites: data => dispatch(initFavorites(data)),
});

function SignInButton({ value, setAcc, initFavorites }) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (value) {
      localStorage.clear();
      navigate("/");
      window.location.reload();
    } else {
      signInWithPopup(auth, provider).then((data) => {
        setAcc(data.user.email);

        localStorage.setItem("email", data.user.email);
        localStorage.setItem("photo", data.user.photoURL);
        localStorage.setItem("name", data.user.displayName);
        fetch(`/api/${data.user.email}`)
          .then((res) => res.json())
          .then((data) => {
            initFavorites(data);
          });
      });
    }
  };

  return (
    <button className="header-button sing-in" onClick={handleClick}>
      {value ? "Log out" : "Sign In"}
    </button>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(SignInButton);
