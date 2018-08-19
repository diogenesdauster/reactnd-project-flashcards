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
import { saveDeckTitle } from "../utils/api";
import { connect } from "react-redux";
import { saveDeck } from "../actions";

class CreateDeck extends Component {
  static propTypes = {
    navigation: PropTypes.shape({ navigate: PropTypes.func.isRequired })
      .isRequired
  };

  state = {
    title: ""
  };
  _handleSubmitNewDeck = () => {
    const { dispatch } = this.props;
    const { title } = this.state;

    if (title) {
      saveDeckTitle(title);
      dispatch(saveDeck(title));
      this.setState({ title: "" });
      this.props.navigation.goBack();
    } else {
      Alert.alert("No Title", "Please write a title for adding a new Deck!!");
    }
  };
  render() {
    const { title } = this.state;
    return (
      <KeyboardAvoidingView style={styles.container}>
        <TextInput
          placeholder="Enter the title for your deck"
          style={Platform.OS === "ios" ? styles.inputIOS : styles.inputAndroid}
          onChangeText={title => this.setState({ title })}
          value={title}
        />
        <Text style={styles.label}>Title</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={this._handleSubmitNewDeck}
        >
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}

export default connect()(CreateDeck);

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
