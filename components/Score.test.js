import "react-native";
import React from "react";
import Score from "./Score";
// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer";

// static propTypes = {
//     score: PropTypes.string.isRequired,
//     startAgain: PropTypes.func.isRequired,
//     goBackToDeck: PropTypes.func.isRequired
//   };

it("renders Score correctly", () => {
  const startAgain = jest.fn();
  const goBackToDeck = jest.fn();

  const tree = renderer
    .create(
      <Score
        score={"100"}
        startAgain={startAgain}
        goBackToDeck={goBackToDeck}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
