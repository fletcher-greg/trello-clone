import React from "react";
import { login } from "../../services/index";

export default () => {
  const attemptLogin = async e => {
    e.preventDefault();

    try {
      let { data } = await login(FormData);
      console.log(data);

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
          Login
        </button>
      </form>
    </div>
  );
};
