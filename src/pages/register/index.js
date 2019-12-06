import React from "react";

export default () => (
  <div className="Register">
    <form className="register-form">
      <h2 className="register-title">Welcome back!</h2>
      <div className="input-container">
        <input className="register-input" placeholder="First Name" />
        <input className="register-input" placeholder="Last Name" />
        <input className="register-input" placeholder="Email" />
        <input className="register-input" placeholder="Password" />
      </div>
      <button className="btn-register">Register</button>
    </form>
  </div>
);
