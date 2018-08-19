import reducer from "../reducers";
import { RECEIVE_DECKS, RECEIVE_DECK, SAVE_DECK, ADD_CARD } from "../actions";

const decks = {
  React: {
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
  JavaScript: {
    title: "JavaScript",
    questions: [
      {
        question: "What is a closure?",
        answer:
          "The combination of a function and the lexical environment within which that function was declared."
      }
    ]
  }
};

const deck = {
  title: "Redux",
  questions: [
    {
      question: "What is Redux?",
      answer: "Redux is a predictable state container for JavaScript apps."
    }
  ]
};

const card = {
  question: "When to use Redux",
  answer:
    "Same piece of application state needs to be mapped to multiple container components"
};

describe("reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual({});
  });

  it("should handle RECEIVE_DECKS", () => {
    expect(
      reducer(
        {},
        {
          type: RECEIVE_DECKS,
          decks
        }
      )
    ).toEqual(decks);
  });

  it("should handle RECEIVE_DECK", () => {
    expect(
      reducer(decks, {
        type: RECEIVE_DECK,
        deck
      })
    ).toEqual({
      ...decks,
      [deck.title]: deck
    });
  });

  it("should handle SAVE_DECK", () => {
    const title = "Redux";
    expect(
      reducer(decks, {
        type: SAVE_DECK,
        title
      })
    ).toEqual({
      ...decks,
      [deck.title]: { title: deck.title, questions: [] }
    });
  });

  it("should handle ADD_CARD", () => {
    const title = "Redux";
    const state = reducer(decks, {
      type: SAVE_DECK,
      title
    });
    const questions = state[title].questions.concat(card);
    expect(
      reducer(state, {
        type: ADD_CARD,
        title,
        card
      })
    ).toEqual({
      ...state,
      [title]: { title, questions }
    });
  });
});
