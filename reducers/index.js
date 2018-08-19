import { RECEIVE_DECKS, RECEIVE_DECK, SAVE_DECK, ADD_CARD } from "../actions";

function decks(state = {}, action) {
  switch (action.type) {
    case RECEIVE_DECKS:
      return {
        ...state,
        ...action.decks
      };
    case RECEIVE_DECK:
      return {
        ...state,
        [action.deck.title]: action.deck
      };
    case SAVE_DECK:
      return {
        ...state,
        [action.title]: {
          title: action.title,
          questions: []
        }
      };
    case ADD_CARD:
      const { title, card } = action;
      const questions = state[title].questions.concat(card);
      return {
        ...state,
        [title]: { title, questions }
      };
    default:
      return state;
  }
}

export default decks;
