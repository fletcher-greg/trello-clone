import React, { useContext, useEffect } from "react";
import { AppState } from "../../App";
import { getInitData } from "../../services/index";
import Card from "../../components/card";
import AddNew from "../../components/card/AddNew";
import { CONSTANTS } from "../../store/actions";
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
          <Card listID={card.id} card={card} />
        ))}
        <div className="add-new-card">
          <AddNew
            type={CONSTANTS.ADD_LIST}
            placeHolder="List Title"
            title="Add another list"
          />
        </div>
      </div>
    </main>
  );
};
