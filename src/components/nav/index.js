import React from "react";
import { Link } from "react-router-dom";

export default () => (
  <nav className="Top-Nav">
    <section className="nav-wrapper">
      <ul className="nav-ul">
        <li className="test">
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </section>
  </nav>
);
