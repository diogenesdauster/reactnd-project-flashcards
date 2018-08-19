import "react-native";
import React from "react";
import DeckList from "./DeckList";
// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer";

// static propTypes = {
//     decks: PropTypes.arrayOf(
//       PropTypes.shape({
//         title: PropTypes.string.isRequired,
//         questions: PropTypes.array.isRequired
//       }).isRequired
//     ),
//     getAllDecks: PropTypes.func.isRequired,
//     navigation: PropTypes.shape({
//       navigate: PropTypes.func.isRequired
//     })
//   };

it("renders DeckList correctly", () => {
  const getAllDecks = jest.fn();
  const mockNavigation = {
    navigate: jest.fn()
  };
  const mockDecks = [
    {
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
    },
    {
      title: "JavaScript",
      questions: [
        {
          question: "What is a closure?",
          answer:
            "The combination of a function and the lexical environment within which that function was declared."
        }
      ]
    }
  ];

  const tree = renderer
    .create(
      <DeckList
        navigation={mockNavigation}
        decks={mockDecks}
        getAllDecks={getAllDecks}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
