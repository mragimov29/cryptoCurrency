import "./SignInForm.css";

export default function SignInForm() {
  return (
    <div className="sign-in-div">
      <form className="sign-in-form">
      <h1>Sign In</h1>
        <input className="sign-in-input" placeholder="Login" />
        <input className="sign-in-input" type="password" placeholder="Password"></input>
        <button className="sign-in-button">Sign In</button>
      </form>
    </div>
  );
}
