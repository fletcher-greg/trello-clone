import { CONSTANTS } from "./actions";
let listID = 2;
let cardID = 2;

export const initState = [
  {
    title: "Nikolaus",
    id: 0,
    cards: [{ id: 0, text: "extra special" }]
  },
  {
    title: "Recipes",
    id: 1,
    cards: [{ id: 0, text: "some text" }]
  }
];

export const listReducer = (state, action) => {
  switch (action.type) {
    case CONSTANTS.ADD_LIST:
      const newList = { title: action.payload, id: listID, cards: [] };
      listID += 1;

      return [...state, newList];
    case "ADD":
      return [...state, { cards: [...action.cards] }];
    case CONSTANTS.ADD_CARD:
      const newState = state.map(list => {
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
      return newState;

    case "INIT":
      return action.data;

    default:
      console.log(action.type);
      console.log("made it to default");
      return state;
  }
};
