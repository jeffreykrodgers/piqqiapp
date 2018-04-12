/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from "react";
import {
  Platform,
  StatusBar,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Text,
  View
} from "react-native";
import Options from "./app/components/options";
import Icon from "react-native-vector-icons/FontAwesome";

console.ignoredYellowBox = ["Remote debugger"];
console.ignoredYellowBox = ["Warning: isMounted(...)"];

const colors = {
  white: "#FFFFFF",
  blue: "#2676F5",
  darkGray: "#202529"
};

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" +
  "Cmd+D or shake for dev menu",
  android: "Double tap R on your keyboard to reload,\n" +
  "Shake or press menu button for dev menu",
});

type Props = {};
export default class App extends Component<Props> {
  renderSettings() {
    return (
      <View style={styles.settings}>
        <View style={styles.settingsLeft}>
          <TouchableOpacity onPress={this.toggleTheme()}>
            <Icon name="cog" style={styles.icon}>
            </Icon>
          </TouchableOpacity>
        </View>
        <View style={styles.settingsRight}>
          <Icon name="microphone" style={styles.icon}>
          </Icon>
        </View>
      </View>
    );
  }

  renderScrollView() {
    return (
      <ScrollView style={styles.container}>
        <Options/>
      </ScrollView>
    );
  }


  render() {
    return (
      <View style={styles.container}>
        {this.renderSettings()}
        <StatusBar
          translucent
          animated
          backgroundColor={colors.blue}
          barStyle="light-content"
        />
        {this.renderScrollView()}
      </View>
    );
  }

  toggleTheme() {

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkGray,
  },
  settings: {
    position: "absolute",
    flexDirection: "row",
    top: 40,
    zIndex: 10,
    paddingHorizontal: 10
  },
  settingsLeft: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start"
  },
  settingsRight: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end"
  },
  icon: {
    color: colors.white,
    fontSize: 24,
    marginHorizontal: 8,
    marginVertical: 2
  }
});
