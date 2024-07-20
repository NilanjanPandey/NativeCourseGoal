import { useState } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Modal,
  Image,
} from "react-native";

function GoalInput(props) {
  const [enterGoalText, setEnterGoalText] = useState("");
  const goalInputHandler = (value) => {
    setEnterGoalText(value);
  };

  const onAddGoalHandler = () => {
    props.onAddGoal(enterGoalText);
    setEnterGoalText("");
  };
  const onModalCancelHandler = () => {};
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/image/goal.png")}
        />
        <TextInput
          style={styles.textInput}
          onChangeText={goalInputHandler}
          placeholder="Add Your Goal."
          value={enterGoalText}
        />
        <View style={styles.buttonContainer}>
          <Button title="Add Goal" onPress={onAddGoalHandler} />
          <Button
            title="Cancel"
            onPress={props.onModalCancel}
            color="#BE240D"
          />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FCEFED",
    padding: 50,
  },
  image: {
    height: 100,
    width: 100,
    margin: 20,
  },
  textInput: {
    borderColor: "grey",
    borderWidth: 1,
    width: "100%",
    marginRight: 8,
    padding: 16,
    backgroundColor: "white",
    borderRadius: 6,
    fontSize: 20,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
});
export default GoalInput;
