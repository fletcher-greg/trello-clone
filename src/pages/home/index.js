import React, { useEffect } from "react";

export default () => {
  //   useEffect(() => (document.title = "Home"), []);
  document.title = "home";
  return <main className="Home">{document.title} </main>;
};
