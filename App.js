/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from "react";
import {
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View
} from "react-native";
import Options from "./app/components/options";
import Icon from "react-native-vector-icons/FontAwesome";
import theme from "./app/styles/common.style";

console.ignoredYellowBox = ["Remote debugger"];
console.ignoredYellowBox = ["Warning: isMounted(...)"];

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
      <View style={styles.container}>
        <Options/>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderSettings()}
        <StatusBar
          translucent
          animated
          backgroundColor={theme.COLOR_PRIMARY}
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
    backgroundColor: theme.COLOR_DARK,
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
    color: theme.COLOR_LIGHT,
    fontSize: 24,
    marginHorizontal: 8,
    marginVertical: 2
  }
});
