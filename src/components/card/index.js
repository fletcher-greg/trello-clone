import React, { useState, useRef, useEffect } from "react";

export default () => {
  const node = useRef();
  let [title, setTitle] = useState("");
  let [clicked, setClicked] = useState(false);
  function handleClick(e) {
    if (node.current.contains(e.target)) {
      console.log("woo");
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
      <div className="card-header" ref={node}>
        <textarea style={clicked ? {} : { display: "none" }}></textarea>

        <h2
          style={clicked ? { display: "none" } : {}}
          onClick={() => setClicked(true)}
          className="card-title"
        >
          Cool Recipes
        </h2>
      </div>
    </section>
  );
};
