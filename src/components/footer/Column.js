import React from "react";
import Links from "./Links";

export default ({ column }) => (
  <section className="footer-column">
    <h2 className="footer-col-title">{column.title}</h2>
    <div className="links-wrapper">
      {column.list.map(list => (
        <Links list={list} />
      ))}
    </div>
  </section>
);
