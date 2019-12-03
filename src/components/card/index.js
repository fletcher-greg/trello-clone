import React, { useState, useRef, useEffect } from "react";

export default () => {
  const node = useRef();
  let [title, setTitle] = useState("");
  let [clicked, setClicked] = useState(false);
  function handleClick(e) {
    if (node.current.contains(e.target)) {
      console.log("inside me!");
      return;
    }
    console.log(node);
    console.log("false bro");
    setClicked(false);
  }
  useEffect(() => {
    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);
  return (
    <section className="Card">
      <div className="card-header">
        {clicked ? (
          <textarea style={{ display: "none" }}></textarea>
        ) : (
          <h2
            ref={node}
            onClick={() => setClicked(true)}
            className="card-title"
          >
            Cool Recipes
          </h2>
        )}
      </div>
    </section>
  );
};
