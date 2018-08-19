import { createStackNavigator } from "react-navigation";
import DeckList from "./components/DeckList";
import DeckDetail from "./components/DeckDetail";
import Quiz from "./components/Quiz";
import { white, lightblue2 } from "./utils/colors";
import ContainerAddCard from "./containers/ContainerAddCard";
import ContainerCreateDeck from "./containers/ContainerCreateDeck";
import ContainerDeckDetail from "./containers/ContainerDeckDetail";
import ContainerDeckList from "./containers/ContainerDeckList";

const StackNavigatorHeaderStyle = {
  backgroundColor: lightblue2
};

export const StackNavigation = createStackNavigator({
  Home: {
    screen: ContainerDeckList,
    navigationOptions: {
      title: "FlashCards",
      headerStyle: StackNavigatorHeaderStyle,
      headerTintColor: white,
      headerBackTitle: null
    }
  },
  CreateDeck: {
    screen: ContainerCreateDeck,
    navigationOptions: {
      title: "New Deck",
      headerTintColor: white,
      headerStyle: StackNavigatorHeaderStyle,
      headerBackTitle: null
    }
  },
  DeckDetail: {
    screen: ContainerDeckDetail,
    navigationOptions: {
      title: "Deck Detail",
      headerTintColor: white,
      headerStyle: StackNavigatorHeaderStyle,
      headerBackTitle: null
    }
  },
  AddCard: {
    screen: ContainerAddCard,
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
