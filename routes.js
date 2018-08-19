import { createStackNavigator } from "react-navigation";
import DeckList from "./components/DeckList";
import CreateDeck from "./components/CreateDeck";
import DeckDetail from "./components/DeckDetail";
import Quiz from "./components/Quiz";
import AddCard from "./components/AddCard";
import { white, lightblue2 } from "./utils/colors";

const StackNavigatorHeaderStyle = {
  backgroundColor: lightblue2
};

export const StackNavigation = createStackNavigator({
  Home: {
    screen: DeckList,
    navigationOptions: {
      title: "FlashCards",
      headerStyle: StackNavigatorHeaderStyle,
      headerTintColor: white,
      headerBackTitle: null
    }
  },
  CreateDeck: {
    screen: CreateDeck,
    navigationOptions: {
      title: "New Deck",
      headerTintColor: white,
      headerStyle: StackNavigatorHeaderStyle,
      headerBackTitle: null
    }
  },
  DeckDetail: {
    screen: DeckDetail,
    navigationOptions: {
      title: "Deck Detail",
      headerTintColor: white,
      headerStyle: StackNavigatorHeaderStyle,
      headerBackTitle: null
    }
  },
  AddCard: {
    screen: AddCard,
    navigationOptions: {
      title: "Add card",
      headerTintColor: white,
      headerStyle: StackNavigatorHeaderStyle,
      headerBackTitle: null
    }
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: {
      title: "Quiz",
      headerTintColor: white,
      headerStyle: StackNavigatorHeaderStyle,
      headerBackTitle: null
    }
  }
});
