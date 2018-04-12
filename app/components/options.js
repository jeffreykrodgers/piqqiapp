import React, {Component} from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import LinearGradient from "react-native-linear-gradient";

const colors = {
  white: "#FFFFFF",
  blue:"#2676F5",
  darkBlue: "#222BCE",
  darkGray: "#202529",
  gray: "#32383D",
  black: "#000000"
};

let optns = [
  {_id: 1, text: "Option 1"},
  {_id: 2, text: "Option 2"},
  {_id: 3, text: "Option 3"},
  {_id: 4, text: "Option 4"},
  {_id: 5, text: "Option 5"},
  {_id: 6, text: "Option 6"},
  {_id: 7, text: "Option 7"}
];

export default class Options extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false
    }
  }

  getOptions() {
    return optns;
  }

  renderButtons() {
    return (
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.roundButton}>
          <Icon name="plus" style={styles.icon}>
          </Icon>
        </TouchableOpacity>
        <TouchableOpacity style={styles.roundButton}>
          <Icon name="thumbs-up" style={styles.icon}>
          </Icon>
        </TouchableOpacity>
      </View>
    );

  }

  renderOptions() {
    return this.getOptions().map((option) => (
      <View style={styles.card} key={option._id}>
        <View style={styles.cardContent}>
          {this.renderOptionInput(option)}
        </View>
        <View style={styles.cardOption}>
          <TouchableOpacity onPress={this.editCard}>
            <Icon name="edit" style={styles.cardOptionIcon}>
            </Icon>
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="trash" style={styles.cardOptionIcon}>
            </Icon>
          </TouchableOpacity>
        </View>
      </View>
    ));
  }

  renderOptionInput(option) {
    if (!this.state.editing) {
      return (
        <Text style={styles.questionText}>
          {option.text}
        </Text>
      )
    } else {
      return (
        <TextInput style={styles.textInput} underlineColorAndroid={"transparent"} placeholderTextColor={colors.blue}>
        </TextInput>
      )
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <LinearGradient colors={[colors.blue, colors.darkBlue]} style={styles.header}>
          <Text style={styles.prompt}>Question will go here!</Text>
        </LinearGradient>
        <View style={styles.options}>
          {this.renderOptions()}
        </View>
        {this.renderButtons()}
      </View>
    );
  }

  editCard = () => {
    this.setState({
      editing: !this.state.editing
    })
  }
}

const styles = StyleSheet.create({
  buttons: {
    flexDirection: "row",
    position: "absolute",
    bottom: 0,
    flex: 1,
    width: "100%",
    alignSelf: "stretch",
    justifyContent: "space-between",
    zIndex: 20
  },
  card: {
    backgroundColor: colors.gray,
    justifyContent: "flex-start",
    elevation: 3,
    flex: 1,
    alignSelf: "stretch",
    margin: 12,
    padding: 12,
    borderRadius: 4,
    minHeight: 160,
    shadowColor: colors.black,
    shadowOpacity: 1,
    shadowOffset: {width: 0, height: 3},
    shadowRadius: 12
  },
  cardContent: {
    flex: 1,
  },
  cardOption: {
    flexDirection: "row",
    alignSelf: "flex-end",
  },
  cardOptionIcon: {
    color: colors.white,
    fontSize: 20,
    margin: 12
  },
  header: {
    height: 180,
    alignSelf: "stretch",
    padding: 20,
    paddingTop: 88
  },
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  options: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
    marginTop: -24,
  },
  questionText: {
    fontSize: 20,
    color: colors.white,
    margin: 10
  },
  prompt: {
    fontSize: 28,
    color: colors.white,
    textAlign: "center"
  },
  roundButton: {
    display: "flex",
    elevation: 6,
    backgroundColor: colors.blue,
    height: 80,
    width: 80,
    margin: 20,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center"
  },
  textInput: {
    borderColor: colors.blue,
    color: colors.white
  },
  icon: {
    color: colors.white,
    fontSize: 22
  }
});


