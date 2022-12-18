import { StyleSheet, View, Text } from "react-native";

export default function Summary({ completedGoals = 0, uncompletedGoals = 0 }) {
  return (
    <View style={styles.container}>
      <View style={{ alignItems: "center" }}>
        <Text style={styles.text}>Completed</Text>
        <Text style={styles.text}>{completedGoals}</Text>
      </View>
      <View style={{ alignItems: "center" }}>
        <Text style={styles.text}>Uncompleted</Text>
        <Text style={styles.text}>{uncompletedGoals}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 8,
    padding: 8,
    paddingHorizontal: 25,
    borderRadius: 6,
    backgroundColor: "#5e0aff",
    color: "#ffffff",
    overflow: "hidden",
  },
  text: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
