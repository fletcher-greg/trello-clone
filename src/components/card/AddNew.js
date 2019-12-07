import React, { useState, useContext, useEffect } from "react";
import TextArea from "react-textarea-autosize";

import { AppState } from "../../App";

export default ({ placeHolder, title, type, id }) => {
  const [state, dispatch] = useContext(AppState);
  const [text, setText] = useState("");
  const [test, setTest] = useState("simet");

  const [open, setOpen] = useState(false);
  useEffect(() => {
    console.log(`it changed my frieends `);
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
              setTest(true);
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
