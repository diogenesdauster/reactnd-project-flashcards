import React from "react";
import { StyleSheet, View, StatusBar } from "react-native";
import { Constants } from "expo";
import { lightblue, lightgray } from "./utils/colors";
import { createStore } from "redux";
import reducer from "./reducers";
import { Provider } from "react-redux";
import { StackNavigation } from "./routes";

function CardsStatusBar({ backgroundColor, ...props }) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  );
}

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={styles.container}>
          <CardsStatusBar
            backgroundColor={lightblue}
            barStyle="light-content"
          />
          <StackNavigation />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: lightgray
  }
});
