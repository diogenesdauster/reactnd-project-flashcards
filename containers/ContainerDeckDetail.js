import DeckDetail from "../components/DeckDetail";
import { getDeck } from "../utils/api";
import { connect } from "react-redux";
import { receiveDeck } from "../actions";

const mapStateToProps = (state, ownProps) => {
  const { navigation } = ownProps;
  return {
    deck: state[navigation.state.params.title],
    navigation
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getDeckByTitle: (title, callback) => {
      getDeck(title)
        .then(deck => dispatch(receiveDeck(deck)))
        .then(callback());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeckDetail);
