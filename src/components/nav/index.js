import React from "react";
import { Link } from "react-router-dom";

export default () => (
  <nav className="Top-Nav">
    <section className="nav-wrapper">
      <ul className="nav-ul">
        <li className="test">
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </section>
  </nav>
);
