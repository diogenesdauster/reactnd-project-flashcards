import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Button
} from "react-native";
import { lightblue3, gray, white, black } from "../utils/colors";

class DeckDetail extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
      state: PropTypes.shape({
        params: PropTypes.shape({
          title: PropTypes.string.isRequired
        }).isRequired
      }).isRequired
    }).isRequired,
    deck: PropTypes.shape({
      title: PropTypes.string.isRequired,
      questions: PropTypes.array.isRequired
    }).isRequired,
    getDeckByTitle: PropTypes.func.isRequired
  };

  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: (
        <Button
          onPress={() => {
            navigation.popToTop();
          }}
          color={white}
          title="Home"
        />
      )
    };
  };

  state = {
    ready: false
  };

  componentDidMount() {
    const { getDeckByTitle, navigation } = this.props;
    const { title } = navigation.state.params;

    getDeckByTitle(title, () => this.setState({ ready: true }));
  }

  _handleAddNewCard = () => {
    const {
      navigation: { navigate },
      deck: { title }
    } = this.props;
    navigate("AddCard", { title });
  };

  _handleStartQuiz = () => {
    const { navigate } = this.props.navigation;
    const { questions } = this.props.deck;
    if (questions.length) {
      navigate("Quiz", { deck: this.props.deck });
    } else {
      Alert.alert(
        "No card found",
        "Please add card to the deck to enable the quiz"
      );
    }
  };
  render() {
    const { title, questions } = this.props.deck;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.cardCount}>
          {questions ? questions.length : 0}{" "}
          {questions && questions.length > 1 ? "cards" : "card"}
        </Text>
        <TouchableOpacity
          onPress={this._handleAddNewCard}
          style={styles.addCardBtn}
        >
          <Text style={{ fontSize: 32, color: white }}>Add Card</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={this._handleStartQuiz}
          style={styles.startQuizBtn}
        >
          <Text style={{ fontSize: 32, color: black }}>Start Quiz</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default DeckDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    fontSize: 56,
    fontWeight: "bold"
  },
  cardCount: {
    fontSize: 36,
    color: gray,
    marginBottom: 60
  },
  addCardBtn: {
    width: 250,
    height: 60,
    marginBottom: 10,
    backgroundColor: lightblue3,
    justifyContent: "center",
    alignItems: "center",
    shadowRadius: 3,
    shadowOpacity: 0.8,
    shadowColor: "rgba(0, 0, 0, 0.24)",
    shadowOffset: {
      width: 0,
      height: 3
    }
  },
  startQuizBtn: {
    width: 250,
    height: 60,
    backgroundColor: white,
    justifyContent: "center",
    alignItems: "center",
    shadowRadius: 3,
    shadowOpacity: 0.8,
    shadowColor: "rgba(0, 0, 0, 0.24)",
    shadowOffset: {
      width: 0,
      height: 3
    }
  }
});
