import "react-native";
import React from "react";
import Deck from "./Deck";
// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer";

// static propTypes = {
//     cardsCount: PropTypes.number.isRequired,
//     title: PropTypes.string.isRequired,
//     navigation: PropTypes.shape({ navigate: PropTypes.func.isRequired })
//       .isRequired
//   };

it("renders Deck correctly", () => {
  const mockNavigation = { navigate: jest.fn() };
  const tree = renderer
    .create(
      <Deck cardsCount={1} title="CardTest" navigation={mockNavigation} />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
