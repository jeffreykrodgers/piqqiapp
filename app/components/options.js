import React, {Component} from "react";
import {
  StyleSheet,
  ScrollView,
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


export default class Options extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      options: [
        {_id: 1, text: "Option 1"}
      ]
    }
  }

  getOptions() {
    return this.state.options;
  }

  renderButtons() {
    return (
      <View style={styles.bottomButtons}>
        <TouchableOpacity style={styles.roundButton} onPress={this.addOption}>
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
        <ScrollView style={styles.options}>
          {this.renderOptions()}
        </ScrollView>
        {this.renderButtons()}
      </View>
    );
  }

  addOption = () => {
    let opt = this.getOptions();
    opt.push({_id: 2, text: "New Option"});

    this.setState({
      options: opt
    });
  };

  editCard = () => {
    this.setState({
      editing: !this.state.editing
    })
  }
}

const styles = StyleSheet.create({
  bottomButtons: {
    flexDirection: "row",
    position: "absolute",
    bottom: 0,
    flex: 1,
    width: "100%",
    alignSelf: "stretch",
    justifyContent: "space-between",
    zIndex: 10
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


