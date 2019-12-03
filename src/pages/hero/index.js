import React from "react";
import Subscribe from "../../components/inputbutton";

export default () => {
  let props = {
    fClass: "sub-form",
    iClass: "sub-input",
    bClass: "sub-btn",
    bText: "Free Sign Up"
  };
  return (
    <div className="Hero">
      <section className="banner">
        <Subscribe {...props} />
      </section>

      <section className="more-info"></section>
    </div>
  );
};
