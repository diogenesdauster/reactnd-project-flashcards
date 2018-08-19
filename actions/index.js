export const RECEIVE_DECKS = "RECEIVE_DECKS";
export const RECEIVE_DECK = "RECEIVE_DECK";
export const SAVE_DECK = "SAVE_DECK";
export const ADD_CARD = "ADD_CARD";

// get Decks from AsnycStorage
export function receiveDecks(decks) {
  return {
    type: RECEIVE_DECKS,
    decks
  };
}
// get one Deck from AsnycStorage
export function receiveDeck(deck) {
  return {
    type: RECEIVE_DECK,
    deck
  };
}
// save a new deck in the AsnycStorage
export function saveDeck(title) {
  return {
    type: SAVE_DECK,
    title
  };
}
// save a new card in the deck that already exists in the AnsycStorage
export function addCard(title, card) {
  return {
    type: ADD_CARD,
    title,
    card
  };
}
