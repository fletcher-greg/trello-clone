import React from "react";
import { register } from "../../services/index";
export default () => {
  const attemptReg = async e => {
    e.preventDefault();

    try {
      let { data } = await register(FormData);
      console.log(data);

      return;
    } catch (err) {
      console.log("error");
      return;
    }
  };

  return (
    <div className="Register">
      <form className="register-form">
        <h2 className="register-title">Welcome back!</h2>
        <div className="input-container">
          <input className="register-input" placeholder="First Name" />
          <input className="register-input" placeholder="Last Name" />
          <input className="register-input" placeholder="Email" />
          <input className="register-input" placeholder="Password" />
        </div>
        <button onClick={e => attemptReg(e)} className="btn-register">
          Register
        </button>
      </form>
    </div>
  );
};
