import React, { useContext, useEffect, useState } from "react";
import { AppState } from "../../App";
import { getInitData } from "../../services/index";
import Card from "../../components/card";

import AddNew from "../../components/card/AddNew";
import Disconnected from "../../components/errors/Disconnected";
import FlashCard from "../../components/card/FlashCard";
import { CONSTANTS } from "../../store/actions";

export default () => {
  const [state, dispatch] = useContext(AppState);
  const [flash, setFlash] = useState(null);
  const discon = state.disconnected;

  useEffect(() => {
    async function fetchData() {
      console.log("got data");
      let data = await getInitData();
      console.log(data.cardData);
      dispatch({ type: "INIT", data: data });
    }

    fetchData();
  }, []);
  useEffect(() => {
    console.log("disconnected");
  }, [discon]);
  return (
    <main className="Home">
      {/* {discon && <Disconnected />} */}
      <div className="cards-wrapper">
        {state.cardData.map(card => (
          <Card
            key={card.id}
            setFlash={setFlash}
            listID={card.id}
            card={card}
          />
        ))}
        <div className="add-new-card">
          <AddNew
            type={CONSTANTS.ADD_LIST}
            placeHolder="List Title"
            title="Add another list"
          />
        </div>
      </div>
      {flash && <FlashCard flashData={flash} />}
    </main>
  );
};
