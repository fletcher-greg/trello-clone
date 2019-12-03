import React from "react";

export default ({ fClass, iClass, bClass, bText }) => (
  <form className={fClass}>
    <input className={iClass}></input>
    <button className={bClass}>{bText}</button>
  </form>
);
