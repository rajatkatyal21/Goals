import { useState } from "react";
import { Button, FlatList, StyleSheet, TextInput, View } from "react-native";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [goalList, setGoalList] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function addGoalEvent(enteredValue) {
    setGoalList((currentGoalList) => [
      ...currentGoalList,
      { text: enteredValue, id: Math.random().toString() },
    ]);
    onCancel();
  }

  function addNewGoal() {
    setModalIsVisible(true);
  }

  function OnItemPress(id) {
    var filteredArray = goalList.filter((e) => e.id !== id);
    setGoalList(filteredArray);
  }

  function onCancel() {
    setModalIsVisible(false);
  }

  return (
    <>
      <StatusBar style="inverted"/>
      <View style={styles.appContainer}>
        <Button
          title="Add New Goal"
          color="#9f63f3"
          onPress={addNewGoal}
        ></Button>
        <GoalInput
          addGoal={addGoalEvent}
          visible={modalIsVisible}
          cancel={onCancel}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            data={goalList}
            renderItem={(dataItem) => {
              return (
                <GoalItem item={dataItem.item} onPressDelete={OnItemPress} />
              );
            }}
            keyExtractor={(item, index) => item.id}
          ></FlatList>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
  },
  goalsContainer: {
    flex: 10,
  },
  goalItem: {
    padding: 8,
    margin: 8,
    backgroundColor: "#008b8b",
    borderRadius: 10,
  },
  goalText: {
    color: "white",
  },
});
