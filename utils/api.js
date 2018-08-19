import { AsyncStorage } from "react-native";

const DECK_STORAGE_KEY = "FlashCards:decks";

export const saveDeckTitle = title => {
  AsyncStorage.mergeItem(
    DECK_STORAGE_KEY,
    JSON.stringify({ [title]: { title, questions: [] } })
  );
};

export const getDecks = () => {
  return AsyncStorage.getItem(DECK_STORAGE_KEY).then(results => {
    return JSON.parse(results);
  });
};

export const getDeck = title => {
  return AsyncStorage.getItem(DECK_STORAGE_KEY).then(result => {
    const data = JSON.parse(result);
    return data[title];
  });
};

export const addCardToDeck = (title, card) => {
  return AsyncStorage.getItem(DECK_STORAGE_KEY).then(result => {
    let newData = JSON.parse(result);
    const newCards = newData[title].questions.concat([card]);
    newData[title].questions = newCards;

    return AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(newData));
  });
};
