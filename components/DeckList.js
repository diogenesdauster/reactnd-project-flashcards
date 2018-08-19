import React, { PureComponent } from "react";
import {
  FlatList,
  TouchableOpacity,
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  Platform
} from "react-native";
import { lightblue3, white } from "../utils/colors";
import Deck from "./Deck";
import Ionicons from "@expo/vector-icons/Ionicons";
import PropTypes from "prop-types";
import { clearLocalNotification, setLocalNotification } from "../utils/helpers";

class DeckList extends PureComponent {
  static propTypes = {
    decks: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        questions: PropTypes.array.isRequired
      }).isRequired
    ),
    getAllDecks: PropTypes.func.isRequired,
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired
    })
  };
  state = { ready: false };

  componentDidMount() {
    const { getAllDecks } = this.props;
    clearLocalNotification().then(setLocalNotification);
    getAllDecks(() => this.setState({ ready: true }));
  }

  _onPress = () => {
    const { navigation } = this.props;
    navigation.navigate("CreateDeck");
  };

  _keyExtractor = item => item.title;

  _renderItem = ({ item }) => {
    const { navigation } = this.props;
    return (
      <Deck
        title={item.title}
        cardsCount={item.questions.length}
        navigation={navigation}
      />
    );
  };

  _listHeaderComponent = () => (
    <TouchableOpacity onPress={this._onPress} style={styles.container}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>Create a New Deck</Text>
      </View>
    </TouchableOpacity>
  );

  _listEmptyComponent = () => {
    return (
      <View style={styles.center}>
        <Ionicons
          name={Platform.OS === "ios" ? "ios-happy-outline" : "md-happy"}
          size={100}
        />
        <Text>No Decks available, please create a New Deck</Text>
      </View>
    );
  };

  render() {
    const { decks } = this.props;
    const { ready } = this.state;

    if (!ready) {
      return <ActivityIndicator style={{ marginTop: 30 }} />;
    }

    return (
      <FlatList
        data={decks}
        ListHeaderComponent={this._listHeaderComponent}
        ListEmptyComponent={this._listEmptyComponent}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 30,
    marginRight: 30,
    marginTop: 17,
    justifyContent: "center"
  },
  button: {
    alignItems: "center",
    backgroundColor: lightblue3
  },
  buttonText: {
    padding: 20,
    color: white
  },
  center: {
    marginTop: 50,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 30,
    marginLeft: 30
  }
});

export default DeckList;
