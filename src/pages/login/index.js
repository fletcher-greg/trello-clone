import React, { useContext } from "react";
import { login } from "../../services/index";
import { UserLogin } from "../../App";

export default () => {
  const [user, setUser] = useContext(UserLogin);
  const attemptLogin = async e => {
    e.preventDefault();

    try {
      console.log("attempt");
      let { data } = await login({
        email: "asdfjasld@gmail.com",
        password: "3p0asdfads"
      });
      console.log(data);
      setUser(true);
      return;
    } catch (err) {
      console.log("error");
      return;
    }
  };
  return (
    <div className="Login">
      <form className="login-form">
        <h2 className="login-title">Welcome back!</h2>
        <div className="input-container">
          <input className="login-input" placeholder="Email" />
          <input className="login-input" placeholder="Password" />
        </div>
        <button onClick={e => attemptLogin(e)} className="btn-login">
          {user ? "false" : "Login"}
        </button>
      </form>
    </div>
  );
};
