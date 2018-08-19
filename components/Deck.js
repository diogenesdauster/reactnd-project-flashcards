import React, { PureComponent } from "react";
import { View, Text, TouchableWithoutFeedback, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import PropTypes from "prop-types";
import { white, gray, yellow } from "../utils/colors";

class Deck extends PureComponent {
  static propTypes = {
    cardsCount: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    navigation: PropTypes.shape({ navigate: PropTypes.func.isRequired })
      .isRequired
  };

  state = {
    color: white
  };

  _onPress = () => {
    const { navigation, title } = this.props;
    navigation.navigate("DeckDetail", { title });
  };
  _onPressIn = () => {
    this.setState({
      color: yellow
    });
  };

  _onPressOut = () => {
    this.setState({
      color: white
    });
  };

  render() {
    const { title, cardsCount } = this.props;
    const { color } = this.state;
    return (
      <TouchableWithoutFeedback
        onPress={this._onPress}
        onPressIn={this._onPressIn}
        onPressOut={this._onPressOut}
        delayPressOut={500}
      >
        <View style={styles.container}>
          <View style={styles.subHeaderContent}>
            <MaterialCommunityIcons name="cards" size={20} color={gray} />
            <Text style={[styles.divider, styles.color]}>|</Text>
            <Text style={styles.color}>{cardsCount} Cards</Text>
          </View>
          <Text style={styles.header}>{title}</Text>
          <View style={{ flex: 1, backgroundColor: color, height: 4 }} />
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 30,
    marginRight: 30,
    marginTop: 17,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#fff",
    shadowRadius: 3,
    shadowOpacity: 0.8,
    shadowColor: "rgba(0, 0, 0, 0.24)",
    shadowOffset: {
      width: 0,
      height: 3
    }
  },
  header: {
    fontSize: 20,
    paddingTop: 5
  },
  subHeaderContent: {
    flexDirection: "row"
  },
  color: {
    color: gray
  },
  divider: {
    paddingLeft: 5,
    paddingRight: 5
  }
});

export default Deck;
