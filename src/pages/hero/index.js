import React, { useState } from "react";
import Subscribe from "../../components/inputbutton";

export default () => {
  const [subbed, setSubbed] = useState(false);
  let props = {
    fClass: "sub-form",
    iClass: "sub-input",
    bClass: "sub-btn",
    bText: "Free Sign Up",
    pHolder: "your email",
    setSubbed
  };
  return (
    <div className="Hero">
      {subbed && <p>{"Subscribed!"}</p>}
      <section className="banner">
        <Subscribe {...props} />
      </section>

      <section className="more-info"></section>
    </div>
  );
};
