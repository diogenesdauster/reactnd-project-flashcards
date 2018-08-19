import { connect } from "react-redux";
import AddCard from "../components/AddCard";
import { addCardToDeck } from "../utils/api";
import { addCard } from "../actions";

const mapDispatchToProps = dispatch => {
  return {
    addNewCard: (title, card) => {
      addCardToDeck(title, card);
      dispatch(addCard(title, card));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(AddCard);
