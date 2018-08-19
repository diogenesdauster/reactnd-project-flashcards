import "react-native";
import React from "react";
import Quiz from "./Quiz";
// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer";

// static propTypes = {
//     navigation: PropTypes.shape({
//       goBack: PropTypes.func.isRequired,
//       state: PropTypes.shape({
//         params: PropTypes.shape({
//           deck: PropTypes.shape({ questions: PropTypes.array.isRequired })
//         })
//       })
//     }).isRequired
//   };

it("renders Quiz correctly", () => {
  const mockNavigation = {
    goBack: jest.fn(),
    state: {
      params: {
        deck: {
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
        }
      }
    }
  };
  const tree = renderer.create(<Quiz navigation={mockNavigation} />).toJSON();
  expect(tree).toMatchSnapshot();
});
