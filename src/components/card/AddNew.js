import React, { useState } from "react";
import TextArea from "react-textarea-autosize";
export default ({ placeHolder, title }) => {
  const [text, setText] = useState("");
  // const [newCard, setNewCard] = useState(false);
  const [open, setOpen] = useState(false);

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
          <button>Add Card</button>
          <button>X</button>
        </>
      )}{" "}
    </>
  );
};
