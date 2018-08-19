import CreateDeck from "../components/CreateDeck";
import { saveDeckTitle } from "../utils/api";
import { connect } from "react-redux";
import { saveDeck } from "../actions";

const mapDispatchToProps = dispatch => {
  return {
    createNewDeck: title => {
      saveDeckTitle(title);
      dispatch(saveDeck(title));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(CreateDeck);
