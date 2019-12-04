import React, { useState } from "react";
import { subscribe } from "../../services/index";

export default ({ fClass, iClass, bClass, bText, pHolder, setSubbed }) => {
  const [email, setEmail] = useState("");

  return (
    <form className={fClass}>
      <input
        placeholder={pHolder}
        value={email}
        onChange={e => setEmail(e.target.value)}
        className={iClass}
      ></input>
      <button
        onClick={async e => {
          e.preventDefault();
          let isSubbed = await subscribe(email);
          setSubbed(isSubbed);
        }}
        className={bClass}
      >
        {bText}
      </button>
    </form>
  );
};
