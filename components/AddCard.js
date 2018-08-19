import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Platform,
  Alert,
  KeyboardAvoidingView
} from "react-native";
import { gray, lightblue3, white } from "../utils/colors";

class AddCard extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
      state: PropTypes.shape({
        params: PropTypes.shape({
          title: PropTypes.string.isRequired
        }).isRequired
      }).isRequired
    }).isRequired,
    addNewCard: PropTypes.func.isRequired
  };

  state = {
    card: {
      question: "",
      answer: ""
    }
  };
  _handleSubmitNewCard = () => {
    if (!this.state.card.question === "") {
      Alert.alert(
        "No Question",
        "Please write a Question for adding a new Card!!"
      );
    } else if (this.state.card.answer === "") {
      Alert.alert("No Answer", "Please write a Answer for adding a new Card!!");
    } else {
      const { navigation, addNewCard } = this.props;
      const { card } = this.state;

      addNewCard(navigation.state.params.title, card);

      this.setState({
        card: {
          question: "",
          answer: ""
        }
      });
      navigation.goBack();
    }
  };
  render() {
    return (
      <KeyboardAvoidingView style={styles.container}>
        <TextInput
          placeholder="Enter new question"
          style={Platform.OS === "ios" ? styles.inputIOS : styles.inputAndroid}
          onChangeText={question =>
            this.setState(prevState => {
              prevState.card.question = question;
              return prevState;
            })
          }
          value={this.state.card.question}
        />
        <Text style={styles.label}>Question</Text>

        <TextInput
          placeholder="Enter the answer"
          style={Platform.OS === "ios" ? styles.inputIOS : styles.inputAndroid}
          onChangeText={answer =>
            this.setState(prevState => {
              prevState.card.answer = answer;
              return prevState;
            })
          }
          value={this.state.card.answer}
        />
        <Text style={styles.label}>Answer</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={this._handleSubmitNewCard}
        >
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}

export default AddCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20
  },
  label: {
    paddingTop: 5,
    color: gray,
    fontSize: 20
  },
  inputIOS: {
    borderBottomWidth: 1,
    height: 37,
    padding: 10
  },
  inputAndroid: {
    height: 37,
    padding: 10
  },
  button: {
    width: 100,
    alignSelf: "flex-end"
  },
  buttonText: {
    backgroundColor: lightblue3,
    color: white,
    padding: 10,
    textAlign: "center"
  }
});
