import "react-native";
import React from "react";
import CreateDeck from "./CreateDeck";
// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer";

// static propTypes = {
//   navigation: PropTypes.shape({ navigate: PropTypes.func.isRequired })
//     .isRequired,
//   createNewDeck: PropTypes.func.isRequired
// };

it("renders CreateDeck correctly", () => {
  const mockNavigation = {
    navigate: jest.fn()
  };
  const mockCreateNewDeck = jest.fn();

  const tree = renderer
    .create(
      <CreateDeck
        navigation={mockNavigation}
        createNewDeck={mockCreateNewDeck}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
