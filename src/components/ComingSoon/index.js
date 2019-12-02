import React, { useEffect } from "react";

export default ({ title }) => {
  useEffect(() => (document.title = title), [title]);

  return (
    <div className="ComingSoon">
      <h2 className="CS-title">{title} is under Development. Coming soon!</h2>
    </div>
  );
};
