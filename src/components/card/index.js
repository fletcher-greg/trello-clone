import React, { useState, useRef, useContext } from "react";
import { AppState } from "../../App";
import AddNew from "./AddNew";

export default ({ card }) => {
  const [state, dispatch] = useContext(AppState);
  const [text, setText] = useState("false");
  const [newCard, setNewCard] = useState(false);
  const [open, setOpen] = useState(false);
  const placeHolder = state ? "Enter a title" : "Enter a title for this card";
  const title = state ? "Add another Card" : "Add Card";

  const node = useRef();
  // let [title, setTitle] = useState("New title");
  // let [clicked, setClicked] = useState(false);
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
          value={card.title}
          onChange={() => "hi"}
          // onChange={e => setTitle(e.target.value)}
        >
          {card.title}
        </textarea>
        {card.cards.map(card => (
          <div key={card.id} className="list-cards">
            <a className="card-click">
              <span className="card-label"></span>
              <p className="card-title">{card.text}</p>
            </a>
          </div>
        ))}
        <AddNew placeHolder={placeHolder} title={title} />
      </div>
    </section>
  );
};

{
  /* <button
        onClick={() =>
          dispatch({
            type: "ADD",
            cards: [{ id: 1, text: "whoo baby" }]
          })
        }
        className="card-add-btn"
      >
        Add Another
      </button> */
}
