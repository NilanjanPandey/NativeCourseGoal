import { useState } from "react";
import { FlatList, StyleSheet, Text, View, Button,Image } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
export default function App() {
  const [courseGoals, setCourseGoal] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const addGoalHandler = (enterGoalText) => {
    setCourseGoal((previousGoals) => [
      ...previousGoals,
      { text: enterGoalText, id: Math.random().toString() },
    ]);
    setModalVisible(false);
  };
  const goalDeleteHandler = (id) => {
    console.log(id);
    setCourseGoal((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  };

  const startAddGoalHandler = () => {
    setModalVisible(true);
  };
  const modalCancelHandler = () => {
    setModalVisible(false);
  };
  return (
    <View style={styles.appContainer}>
      <View style={styles.header}>
        <Text style={{ fontSize: 25, padding: 20 }}>
          Course Goal Application
        </Text>
        <Button
          onPress={startAddGoalHandler}
          title="Add New Goal"
          color="blue"
        />
      </View>
    {/* <Image style={styles.image} source={require('./assets/image/goal.png')}/> */}
      <View>
        <GoalInput
          onModalCancel={modalCancelHandler}
          visible={modalVisible}
          onAddGoal={addGoalHandler}
        />
      </View>

      <View style={styles.goalsContainer}>
        <FlatList
          keyExtractor={(item, index) => item.id}
          data={courseGoals}
          renderItem={(itemData) => {
            return (
              <GoalItem
                onGoalDelete={goalDeleteHandler}
                text={itemData.item.text}
                id={itemData.item.id}
              />
            );
          }}
        />
      </View>
      {/* Alternative Approach */}

      {/* <View style={styles.goalsContainer}>
        <ScrollView>
          {courseGoals.map((goal) => (
            <Text style={styles.listItems} key={Math.random().toString()}>
              {goal}
            </Text>
          ))}
        </ScrollView>
      </View> */}
    </View>
    // <View style={{padding:50}}>
    //   <View style={[styles.boxContainer, styles.conatainer1]}>
    //     <Text>1</Text>
    //   </View>
    //   <View style={[styles.boxContainer, styles.conatainer2]}>
    //     <Text>2</Text>
    //   </View>
    //   <View style={[styles.boxContainer, styles.conatainer3]}>
    //     <Text>3</Text>
    //   </View>
    // </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "column",
    paddingTop: 20,
    alignItems: "center",
  },
  appContainer: {
    paddingTop: 20,
    paddingHorizontal: 16,
    flex: 1,
    backgroundColor: "#FCEFED",
  },
  goalsContainer: {
    flex: 5,
  },

  /*Flexbox example css*/
  boxContainer: {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    borderBlockColor: "black",
    borderWidth: 1,
  },
  conatainer1: {
    backgroundColor: "red",
  },
  conatainer2: {
    backgroundColor: "green",
  },
  conatainer3: {
    backgroundColor: "olive",
  },
});
