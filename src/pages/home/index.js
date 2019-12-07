import React, { useContext, useEffect } from "react";
import { AppState } from "../../App";
import { getInitData } from "../../services/index";
import Card from "../../components/card";
import AddNew from "../../components/card/AddNew";

export default () => {
  const [state, dispatch] = useContext(AppState);

  useEffect(() => {
    async function fetchData() {
      let data = await getInitData();

      dispatch({ type: "INIT", data });
    }

    fetchData();
  }, []);
  return (
    <main className="Home">
      <div className="cards-wrapper">
        {state.map(card => (
          <Card card={card} />
        ))}
        <div className="add-new-card">
          <AddNew placeHolder="List Title" title="Add another list" />
        </div>
      </div>
    </main>
  );
};
