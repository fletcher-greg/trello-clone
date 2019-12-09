import React from "react";

export default ({ user }) => (
  <div className="info-bar">
    <section className="board-left">
      <h2 className="board-title">Algo</h2>
      <div className="bar-btn star">{user}</div>
      <div className="bar-btn personal">Personal</div>
      <div className="bar-btn private">Private</div>
      <div className="bar-btn user-name">Name</div>
      <div className="bar-btn invite">Invite</div>
    </section>
    <section className="board-right">
      <button className="bar-btn menu">Show menu</button>
    </section>
  </div>
);
