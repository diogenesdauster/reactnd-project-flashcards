import {
  receiveDecks,
  receiveDeck,
  saveDeck,
  addCard,
  RECEIVE_DECKS,
  RECEIVE_DECK,
  SAVE_DECK,
  ADD_CARD
} from "./index";

describe("actions", () => {
  it("should create an action to receive all the Decks", () => {
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
    const expectedAction = {
      type: RECEIVE_DECKS,
      decks
    };
    expect(receiveDecks(decks)).toEqual(expectedAction);
  });

  it("should create an action to receive one Deck", () => {
    const deck = {
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
    const expectedAction = {
      type: RECEIVE_DECK,
      deck
    };
    expect(receiveDeck(deck)).toEqual(expectedAction);
  });

  it("should create an action to save one Deck", () => {
    const title = "React";
    const expectedAction = {
      type: SAVE_DECK,
      title
    };
    expect(saveDeck(title)).toEqual(expectedAction);
  });

  it("should create an action to save one Deck", () => {
    const title = "React";
    const expectedAction = {
      type: SAVE_DECK,
      title
    };
    expect(saveDeck(title)).toEqual(expectedAction);
  });

  it("should create an action to add one Card", () => {
    const title = "React";
    const card = {
      question: "What is React?",
      answer: "A library for managing user interfaces"
    };
    const expectedAction = {
      type: ADD_CARD,
      title,
      card
    };
    expect(addCard(title, card)).toEqual(expectedAction);
  });
});
