import React, { useState, useContext, useEffect } from "react";
import TextArea from "react-textarea-autosize";
import { CONSTANTS } from "../../store/actions/index";
import { AppState } from "../../App";
export default ({ placeHolder, title, type, id }) => {
  const [state, dispatch] = useContext(AppState);
  const [text, setText] = useState("");
  const [test, setTest] = useState("");
  // const [newCard, setNewCard] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    console.log("state changed");
    console.log(state);
  }, [test]);
  return (
    <>
      {open && (
        <TextArea
          className="card-textarea"
          value={text}
          onChange={e => setText(e.target.value)}
          onBlur={() => setOpen(false)}
          placeholder={placeHolder}
          autoFocus
        />
      )}
      {!open ? (
        <button onClick={() => setOpen(true)} className="card-add-btn">
          {title}
        </button>
      ) : (
        <>
          <button
            onMouseDown={() => {
              return dispatch(
                id ? { type, payload: text, id } : { type, payload: text }
              );
            }}
          >
            Add Card
          </button>
          <button>X</button>
        </>
      )}{" "}
    </>
  );
};
