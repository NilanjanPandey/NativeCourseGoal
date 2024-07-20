import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

function GoalItem(props) {
  const goalDeleteHandler = () => {
    props.onGoalDelete(props.id);
  };
  return (
    <Pressable
      style={({ pressed }) => pressed && styles.pressedItem}
      android_ripple={{ color: "red" }}
      onPress={goalDeleteHandler}
    >
      <View>
        <Text style={styles.listItems} key={Math.random().toString()}>
          {props.text}
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  listItems: {
    margin: 5,
    padding: 5,
    borderRadius: 6,
    backgroundColor: "#D3D3D3",
    fontSize: 20,
  },
  pressedItem: {
    opacity: 0.5,
    // backgroundColor:'green'
  },
});
export default GoalItem;
