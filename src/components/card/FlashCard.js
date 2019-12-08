import React, { useContext } from "react";
import TextArea from "react-textarea-autosize";
import { AppState } from "../../App";
import Comments from "./Comments";

export default ({ flashData }) => {
  let { card, listID } = flashData;
  const [state, dispatch] = useContext(AppState);

  return (
    <div key={card.id} className="overlay">
      <article className="flash-wrapper">
        <section className="title-container">
          <h2 className="flash-title">{card.text}</h2>
        </section>
        <section className="flash-description">
          <p>Description</p>
          <TextArea
            autoFocus
            className="flash-textarea"
            placeholder="Add a description"
            value={card.description}
          />
          <div className="flash-btn-wrap">
            <button className="flash-btn-save">Save</button>
            <button className="flash-btn-exit">X</button>
          </div>
        </section>
        <section className="flash-comments">
          <p>Activity</p>
          <TextArea
            autoFocus
            className="flash-textarea"
            placeholder="Add some comments"
          />
          <div className="flash-btn-wrap">
            <button
              onClick={() =>
                dispatch({
                  type: "ADD_COMMENT",
                  data: { id: card.id, text: "a new comment" }
                })
              }
              className="flash-btn-save"
            >
              Save
            </button>
            <button className="flash-btn-exit">X</button>
          </div>
          <div className="flash-list-comments">
            {card.activity &&
              card.activity.map(data => <Comments key={data.id} data={data} />)}
          </div>
        </section>
        <section className="flash-sidebar">
          <div className="sidebar-add">
            <h2>Title</h2>
            <ul>
              <li>content</li>
              <li>more content</li>
              <li>more content</li>
              <li>more content</li>
            </ul>
          </div>
          <div className="sidebar-powerups">
            <h2>Title</h2>
            <ul>
              <li>content</li>
              <li>more content</li>
              <li>more content</li>
              <li>more content</li>
            </ul>
          </div>
          <div className="sidebar-actions">
            <h2>Title</h2>
            <ul>
              <li>content</li>
              <li>more content</li>
              <li>more content</li>
              <li>more content</li>
            </ul>
          </div>
        </section>
      </article>
    </div>
  );
};
