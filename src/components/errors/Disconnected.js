import React from "react";
export default () => (
  <div className="disconnected">
    <section className="discon-msg-wrap">
      <h2 className="disconnected-msg">
        Oh no! You're disconnected from the internet :(
      </h2>
      <h2 className="disconnected-msg">
        We can't save any new notes until you connect again
      </h2>
      <h2 className="disconnected-msg">
        Please check your internet connection{" "}
      </h2>
    </section>
  </div>
);
