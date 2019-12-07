import { CONSTANTS } from "./actions";
let listID = 2;

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
      const newList = { title: action.payload.title, id: listID, cards: [] };
      listID += 1;
      return [...state, newList];
    case "ADD":
      console.log([...state, { cards: [...action.cards] }]);
      return [...state, { cards: [...action.cards] }];
    case "INIT":
      return action.data;
    default:
      return;
  }
};
