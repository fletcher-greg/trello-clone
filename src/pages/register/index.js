import React, { useContext } from "react";
import { register } from "../../services/index";
import { UserLogin } from "../../App";

export default () => {
  const [, setUser] = useContext(UserLogin);
  const attemptReg = async e => {
    e.preventDefault();

    try {
      let { data } = await register({
        email: "asdfjasld@gmail.com",
        password: "3p0asdfads",
        lastName: "billy",
        firstName: "willy"
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
