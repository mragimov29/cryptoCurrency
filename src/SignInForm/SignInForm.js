import "./SignInForm.css";

export default function SignInForm() {
  return (
    <div className="sign-in-div">
      <form className="sign-in-form">
        <label className="sign-in-label">Login: </label>
        <input className="sign-in-input" />
        <label className="sign-in-label">Password: </label>
        <input className="sign-in-input" type="password"></input>
        <button className="sign-in-button">Sign In</button>
      </form>
    </div>
  );
}
