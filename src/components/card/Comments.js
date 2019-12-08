import React from "react";
import TextArea from "react-textarea-autosize";

export default ({ data }) => (
  <div className="comment-wrap">
    <div className="comment-meta">
      <h2 className="comment-author">{data.author}</h2>
      <p className="creation-time">{data.created}</p>
    </div>
    <div className="comment-content">
      <TextArea value={data.text} />
    </div>
  </div>
);
