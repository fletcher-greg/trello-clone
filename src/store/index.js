import { CONSTANTS } from "./actions";
let listID = 2;
let cardID = 2;

export const initState = {
  cardData: [
    {
      title: "Awesome sauce",
      id: 0,
      cards: [{ id: 0, text: "no you don't say" }]
    },
    {
      title: "Lols",
      id: 1,
      cards: [
        { id: 0, text: "Freedom" },
        { id: 1, text: "Billions" }
      ]
    }
  ],
  dbSync: false
};

export const listReducer = (state, action) => {
  switch (action.type) {
    case CONSTANTS.ADD_LIST:
      const newList = { title: action.payload, id: listID, cards: [] };
      listID += 1;

      return { ...state, cardData: [...state.cardData, newList] };
    case "ADD":
      return [...state, { cards: [...action.cards] }];
    case CONSTANTS.ADD_CARD:
      const newState = state.cardData.map(list => {
        if (list.id === action.id) {
          const newCard = { id: cardID, text: action.payload };
          cardID += 1;

          return { ...list, cards: [...list.cards, newCard] };
        } else {
          return list;
        }
      });
      //  TODO send to database
      // TODO dispatch and check to see if it was sucessfull.  if not, delete the card/message
      return { dbSync: !state.dbSync, cardData: [...newState] };

    case CONSTANTS.UPDATE_SUCCESS:
      return { dbSync: false, cardData: [...state.cardData] };
    case CONSTANTS.DISCONNECTED:
      const theState = state.cardData.filter(card => {
        if (card.id < 2) {
          return card;
        }
      });

      return { dbSync: state.dbSync, cardData: [...theState] };
    case "INIT":
      return action.data;

    default:
      console.log("made it to default");
      return state;
  }
};
