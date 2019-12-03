import React, { useState, useRef, useEffect } from "react";

export default () => {
  const node = useRef();
  let [title, setTitle] = useState("New title");
  let [clicked, setClicked] = useState(false);
  // function handleClick(e) {
  //   if (node.current.contains(e.target)) {
  //     console.log(node.current);
  //     console.log(e.target);
  //     return;
  //   }
  //   console.log("falsys");

  //   setClicked(false);
  // }
  // useEffect(() => {
  //   document.addEventListener("mousedown", handleClick);

  //   return () => {
  //     document.removeEventListener("mousedown", handleClick);
  //   };
  // }, []);
  return (
    <section className="Card">
      <div className="card-header" ref={node}>
        <textarea
          className="topic-title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        >
          {title}
        </textarea>
        <div className="list-cards">
          <a className="card-click">
            <span className="card-label"></span>
            <p className="card-title">Temporary</p>
          </a>
        </div>
      </div>
      <button className="card-add-btn">Add Another</button>
    </section>
  );
};
