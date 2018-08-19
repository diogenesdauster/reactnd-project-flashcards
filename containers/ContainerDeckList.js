import DeckList from "../components/DeckList";
import { getDecks } from "../utils/api";
import { connect } from "react-redux";
import { receiveDecks } from "../actions";
import { createSelector } from "reselect";

const getKeysOfStorage = state => Object.keys(state);
const getDecksOfStorage = state => state;

const makeDecks = createSelector(
  getKeysOfStorage,
  getDecksOfStorage,
  (keys, decks) =>
    keys.reduce((acc, item) => {
      acc.push(decks[item]);
      return acc;
    }, [])
);

const mapDispatchToProps = dispatch => {
  return {
    getAllDecks: callback => {
      getDecks()
        .then(decks => dispatch(receiveDecks(decks)))
        .then(callback());
    }
  };
};

const mapStateToProps = state => {
  return {
    decks: makeDecks(state)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeckList);
