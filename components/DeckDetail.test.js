import "react-native";
import React from "react";
import DeckDetail from "./DeckDetail";
// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer";

// static propTypes = {
//     navigation: PropTypes.shape({
//       navigate: PropTypes.func.isRequired,
//       state: PropTypes.shape({
//         params: PropTypes.shape({
//           title: PropTypes.string.isRequired
//         }).isRequired
//       }).isRequired
//     }).isRequired,
//     deck: PropTypes.shape({
//       title: PropTypes.string.isRequired,
//       questions: PropTypes.array.isRequired
//     }).isRequired,
//     getDeckByTitle: PropTypes.func.isRequired
//   };

it("renders DeckDetail correctly", () => {
  const getDeckByTitle = jest.fn();
  const mockNavigation = {
    navigate: jest.fn(),
    state: { params: { title: "CardTest" } }
  };
  const mockDeck = {
    title: "React",
    questions: [
      {
        question: "What is React?",
        answer: "A library for managing user interfaces"
      },
      {
        question: "Where do you make Ajax requests in React?",
        answer: "The componentDidMount lifecycle event"
      }
    ]
  };

  const tree = renderer
    .create(
      <DeckDetail
        navigation={mockNavigation}
        deck={mockDeck}
        getDeckByTitle={getDeckByTitle}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
