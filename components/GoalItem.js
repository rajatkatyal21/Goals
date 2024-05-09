import { View, Text, StyleSheet, Pressable, Modal } from "react-native";

function GoalItem(props) {
  function onDelete() {
    props.onPressDelete(props.item.id);
  }

  return (
    <View style={styles.goalItem}>
      <Pressable
        style={({ pressed }) => pressed && styles.iosPressed}
        onPress={onDelete}
        android_ripple={{ color: "#9e56dc", borderRadius: 10 }}
      >
        <Text style={styles.goalText}>{props.item.text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    backgroundColor: "#490ca0",
    borderRadius: 10,
  },
  goalText: {
    color: "white",
    padding: 8,
  },
  iosPressed: {
    opacity: 0.5,
  },
});

export default GoalItem;
