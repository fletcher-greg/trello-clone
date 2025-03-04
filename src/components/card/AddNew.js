import React, { useState, useContext, useEffect } from "react";
import TextArea from "react-textarea-autosize";
import { updateDB } from "../../services";
import { CONSTANTS } from "../../store/actions/index";
import { AppState } from "../../App";

export default ({ placeHolder, title, type, id }) => {
  const [state, dispatch] = useContext(AppState);
  const [text, setText] = useState("");
  const [data, setData] = useState("");
  const [once, setOnce] = useState(0);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    async function sendData() {
      let result;
      try {
        result = await updateDB(data);
        if (result.message === "successful update") {
          dispatch({ type: CONSTANTS.UPDATE_SUCCESS });
        } else {
          dispatch({
            type: CONSTANTS.DISCONNECTED,
            payload: result.payload,
            id: 2
          });
        }
      } catch (err) {
        dispatch({
          type: CONSTANTS.DISCONNECTED,
          payload: result.payload,
          id: 2
        });
        return;
      }
    }
    sendData();
  }, [once]);
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
              setOnce(once + 1);
              //   setData(
              //     id ? { type, payload: text, id } : { type, payload: text }
              //   );
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
