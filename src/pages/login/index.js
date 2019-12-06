import React from "react";

export default () => (
  <div className="Login">
    <form className="login-form">
      <h2 className="login-title">Welcome back!</h2>
      <div className="input-container">
        <input className="login-input" placeholder="Email" />
        <input className="login-input" placeholder="Password" />
      </div>
      <button className="btn-login">Login</button>
    </form>
  </div>
);
