import "react-native";
import React from "react";
import AddCard from "./AddCard";
// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer";

// static propTypes = {
//   navigation: PropTypes.shape({
//     navigate: PropTypes.func.isRequired,
//     state: PropTypes.shape({
//       params: PropTypes.shape({
//         title: PropTypes.string.isRequired
//       }).isRequired
//     }).isRequired
//   }).isRequired,
//   addNewCard: PropTypes.func.isRequired
// };

it("renders AddCard correctly", () => {
  const mockAddNewCard = jest.fn();
  const mockNavigation = {
    navigate: jest.fn(),
    state: { params: { title: "CardTest" } }
  };

  const tree = renderer
    .create(<AddCard navigation={mockNavigation} addNewCard={mockAddNewCard} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
