import React, {Component} from "react";
import {
  StyleSheet,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  Keyboard,
  Platform,
  View
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import LinearGradient from "react-native-linear-gradient";
import theme from "../styles/common.style";

const isAndroid = Platform.OS === "android";

export default class Options extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonState: true,
      editing: false,
      options: []
    }
  }

  componentDidMount() {
    Keyboard.addListener(
      isAndroid ? "keyboardDidShow" : "keyboardWillShow",
      e => console.log("KEYBOARD", e)
    );

    Keyboard.addListener(
      isAndroid ? "keyboardDidHide" : "keyboardWillHide",
      () => console.log("KEYBOARD")
    );

    // Tasks.all(tasks => this.setState({ tasks: tasks || [] }));
    // Press.all(press => this.setState({ press: press || [] }));
  }

  getOptions() {
    return this.state.options;
  }


  render() {
    return (
      <View style={styles.container}>
        <LinearGradient colors={[theme.COLOR_PRIMARY, theme.COLOR_SECONDARY]} style={styles.header}>
          <Text style={styles.prompt}>Question will go here!</Text>
        </LinearGradient>
        <ScrollView style={styles.options}>
          {this.renderOptions()}
        </ScrollView>
        {this.renderButtons()}
      </View>
    );
  }

  renderButtons() {
    if (this.state.buttonState) {
      return (
        <View style={styles.bottomButtons}>
          <TouchableOpacity style={styles.roundButton} onPress={() => this.addOption()}>
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
  }

  renderOptions() {
    return this.state.options.map((option) => (
      <View style={styles.card} key={option}>
        <View style={styles.cardContent}>
          {this.renderOptionInput(option)}
        </View>
        {this.renderCardActions(option)}
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
        <TextInput style={styles.textInput}
                   onBlur={() => this.state.tasks.disableEdit()}
                   underlineColorAndroid={"transparent"}
                   placeholderTextColor={theme.COLOR_PRIMARY}>
        </TextInput>
      )
    }
  }

  renderCardActions(option) {
    if (this.state.buttonState) {
      return (
        <View style={styles.cardOption}>
          <TouchableOpacity onPress={() => this.editOption(option)}>
            <Icon name="edit" style={styles.cardOptionIcon}>
            </Icon>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.deleteOption(option)}>
            <Icon name="trash" style={styles.cardOptionIcon}>
            </Icon>
          </TouchableOpacity>
        </View>
      );
    }
  }

  addOption() {
    let opt = this.state.options;
    console.log("opt", opt);
    opt.push(`Test ${opt.length + 1}`);

    this.setState({
      options: opt
    });
  }

  editOption(option) {
    console.log("OPTION", option);
    this.setState({
      buttonState: false,
      editing: true
    })
  }


  disableEdit() {
    this.setState({
      buttonState: true,
      editing: false
    })
  }

  deleteOption(option) {
    let options = this.state.options;
    options.splice(options.indexOf(option), 1);

    this.setState({
      options: options,
    });

    console.log("DELETE OPT", this.state);
  }
}
//
// let Press = {
//   delete(option) {
//
//   },
//
//   add() {
//
//   },
//
//   edit(option) {
//
//   }
// };
//
// let Tasks = {
//   disableEdit() {
//   }
// };

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
    backgroundColor: theme.COLOR_GRAY,
    justifyContent: "flex-start",
    elevation: 3,
    flex: 1,
    alignSelf: "stretch",
    margin: 12,
    padding: 12,
    borderRadius: 4,
    minHeight: 160,
    shadowColor: theme.COLOR_BLACK,
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
    color: theme.COLOR_LIGHT,
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
    color: theme.COLOR_LIGHT,
    margin: 10
  },
  prompt: {
    fontSize: 28,
    color: theme.COLOR_LIGHT,
    textAlign: "center"
  },
  roundButton: {
    display: "flex",
    elevation: 6,
    backgroundColor: theme.COLOR_PRIMARY,
    height: 80,
    width: 80,
    margin: 20,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center"
  },
  textInput: {
    borderColor: theme.COLOR_PRIMARY,
    color: theme.COLOR_LIGHT
  },
  icon: {
    color: theme.COLOR_LIGHT,
    fontSize: 22
  }
});


