import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Animated,
  TouchableOpacity
} from "react-native";
import PropTypes from "prop-types";
import { clearLocalNotification, setLocalNotification } from "../utils/helpers";
import { white, lightblue2, lightblue3 } from "../utils/colors";

class Score extends Component {
  static propTypes = {
    score: PropTypes.string.isRequired,
    startAgain: PropTypes.func.isRequired,
    goBackToDeck: PropTypes.func.isRequired
  };

  state = {
    scoreAnimeted: new Animated.Value(0)
  };

  componentDidMount() {
    clearLocalNotification().then(setLocalNotification);
    this.state.scoreAnimeted.addListener(({ value }) => {
      const score = Number(value).toFixed(2);
      this.setState({ score });
    });
    Animated.timing(this.state.scoreAnimeted, {
      toValue: this.props.score,
      duration: 500,
      delay: 1000
    }).start();
  }
  componentWillUnmount() {
    this.state.scoreAnimeted.removeAllListeners();
  }
  render() {
    const { score, startAgain, goBackToDeck } = this.props;
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 32 }}>Your score is:</Text>
        <Animated.Text style={{ fontSize: 40, marginBottom: 20 }}>
          {score || "0.00"}%
        </Animated.Text>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: lightblue2 }]}
          onPress={startAgain}
        >
          <Text style={{ fontSize: 32, color: white }}>Start Again</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: lightblue3 }]}
          onPress={goBackToDeck}
        >
          <Text style={{ fontSize: 32, color: white }}>Back to Deck</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Score;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    width: 250,
    height: 60,
    marginBottom: 10,
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
