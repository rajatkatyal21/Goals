import { useState } from "react";
import { TextInput, StyleSheet, View, Button, Modal, Image } from "react-native";

function GoalInput(props) {
  const [enteredText, setEnteredText] = useState("");

  function onPressGoal() {
    props.addGoal(enteredText);
    setEnteredText("");
  }

  function inputGoalListner(enteredText) {
    setEnteredText(enteredText);
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
      <Image source={require('../assets/goal.png')} style={styles.image}></Image>
        <TextInput
          placeholder="input goal"
          style={styles.inputBox}
          onChangeText={inputGoalListner}
          value={enteredText}
        ></TextInput>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Goals" onPress={onPressGoal} color='#7acb16' />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.cancel} color='#9e56dc' />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputBox: {
    borderWidth: 1,
    borderColor: "#bc7cf4",
    width: "90%",
    padding: 8,
    marginHorizontal: 8,
    color: "#bc7cf4",
  },
  inputContainer: {
    alignItems: "center",
    flex: 1,
    justifyContent:"center",
    backgroundColor: "#370662"
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 16,
    alignItems:"center"
  },
  button: {
    width: 100,
    marginHorizontal: 16,
  },
  image: {
    width:150,
    height:150,
    margin:20,
  }
});

export default GoalInput;
