import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Button,
  Animated
} from "react-native";
import Score from "./Score";
import { white, red, green } from "../utils/colors";

class Quiz extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      goBack: PropTypes.func.isRequired,
      state: PropTypes.shape({
        params: PropTypes.shape({
          deck: PropTypes.shape({ questions: PropTypes.array.isRequired })
        })
      })
    }).isRequired
  };

  state = {
    cardIndex: 0,
    correctAnswer: 0,
    showAnswer: false
  };
  componentWillMount() {
    this.cardFlip = new Animated.Value(0);
    this.flipValue = 0;
    this.cardFlip.addListener(({ value }) => {
      this.flipValue = value;
    });

    this.flipCardInterpolate = this.cardFlip.interpolate({
      inputRange: [0, 360],
      outputRange: ["0deg", "360deg"]
    });

    this.cardSwipe = new Animated.Value(0);
    this.cardOpacityInterpolate = this.cardSwipe.interpolate({
      inputRange: [-400, 0, 400],
      outputRange: [0, 1, 0]
    });
  }
  componentWillUnmount() {
    this.cardFlip.removeAllListeners();
  }
  _flipCard = () => {
    if (this.flipValue >= 90) {
      Animated.spring(this.cardFlip, {
        toValue: 0,
        friction: 8,
        tension: 10,
        useNativeDriver: true
      }).start();
    } else {
      Animated.spring(this.cardFlip, {
        toValue: 360,
        friction: 8,
        tension: 10,
        useNativeDriver: true
      }).start();
    }
  };
  _swipeCard = () => {
    Animated.sequence([
      Animated.timing(this.cardSwipe, {
        toValue: 400,
        duration: 500,
        useNativeDriver: true
      }),
      Animated.timing(this.cardSwipe, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true
      })
    ]).start();
  };
  _toggleAnswer = () => {
    this._flipCard();
    setTimeout(() => {
      this.setState({ showAnswer: !this.state.showAnswer });
    }, 250);
  };
  _handleButtonClick = isCorrectAnswer => () => {
    let { correctAnswer, cardIndex } = this.state;
    correctAnswer += isCorrectAnswer ? 1 : 0;
    ++cardIndex;
    this._swipeCard();
    setTimeout(() => {
      this.setState({ correctAnswer, cardIndex, showAnswer: false });
    }, 500);
  };
  _renderQuizView = () => {
    const { questions } = this.props.navigation.state.params.deck;
    const { showAnswer, cardIndex } = this.state;
    if (showAnswer) {
      return (
        <View style={{ flex: 1 }}>
          <View>
            <Text>{`${cardIndex + 1} / ${questions.length}`}</Text>
          </View>
          <View style={styles.content}>
            <Text style={styles.answer}>{questions[cardIndex].answer}</Text>
            <Button onPress={this._toggleAnswer} title="View Question" />
          </View>
          <View style={styles.buttonGroup}>
            <TouchableOpacity
              style={[styles.button, { backgroundColor: red }]}
              onPress={this._handleButtonClick(false)}
            >
              <Text style={styles.buttonText}>Incorrect</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, { backgroundColor: green }]}
              onPress={this._handleButtonClick(true)}
            >
              <Text style={styles.buttonText}>Correct</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    }
    return (
      <View style={{ flex: 1 }}>
        <View>
          <Text>{`${cardIndex + 1} / ${questions.length}`}</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.question}>{questions[cardIndex].question}</Text>
          <Button onPress={this._toggleAnswer} title="View Answer" />
        </View>
      </View>
    );
  };
  _startAgain = () => {
    this.setState({
      cardIndex: 0,
      correctAnswer: 0,
      showAnswer: false
    });
  };
  _goBackToDeck = () => {
    this.props.navigation.goBack();
  };
  render() {
    const animatedStyle = {
      transform: [
        { rotateY: this.flipCardInterpolate },
        { translateX: this.cardSwipe }
      ],
      opacity: this.cardOpacityInterpolate
    };
    const { questions } = this.props.navigation.state.params.deck;
    const { cardIndex, correctAnswer } = this.state;
    return (
      <Animated.View style={[styles.container, animatedStyle]}>
        {cardIndex < questions.length ? (
          this._renderQuizView()
        ) : (
          <Score
            score={Number((correctAnswer / questions.length) * 100).toFixed(2)}
            startAgain={this._startAgain}
            goBackToDeck={this._goBackToDeck}
          />
        )}
      </Animated.View>
    );
  }
}

export default Quiz;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    padding: 20,
    backgroundColor: white,
    shadowRadius: 3,
    shadowOpacity: 0.8,
    shadowColor: "rgba(0, 0, 0, 0.24)",
    shadowOffset: {
      width: 0,
      height: 3
    }
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonGroup: {
    height: 50,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  question: {
    fontSize: 32,
    textAlign: "center",
    marginBottom: 10
  },
  answer: {
    fontSize: 28,
    textAlign: "center",
    marginBottom: 10
  },
  button: {
    padding: 10,
    width: 100,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 5,
    marginRight: 5,
    shadowRadius: 3,
    shadowOpacity: 0.8,
    shadowColor: "rgba(0, 0, 0, 0.24)",
    shadowOffset: {
      width: 0,
      height: 3
    }
  },
  buttonText: {
    color: white,
    fontSize: 18
  }
});
