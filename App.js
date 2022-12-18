import { StyleSheet, View, FlatList, Button } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import Summary from "./components/Summary";

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);
  const [completedGoals, setCompletedGoals] = useState({
    completed: 0,
    uncompleted: 0,
  });

  function startAddGoalHandler() {
    setModalVisible(true);
  }
  function endGoalHandler() {
    setModalVisible(false);
  }

  function addGoalHandler(enteredGoalText) {
    if (enteredGoalText.length !== 0) {
      let newGoal = {
        text: enteredGoalText,
        id: Math.random().toString(),
        completed: false,
      };

      setCourseGoals((currentGoals) => [...currentGoals, newGoal]);

      endGoalHandler();
    } else {
      alert("Please enter a goal");
    }
  }

  function deleteGoalHandler(id) {
    setCourseGoals((currentGoals) => [
      ...currentGoals.filter((goal) => goal.id !== id),
    ]);
  }

  function completeGoalHandler(id) {
    setCourseGoals((currentGoals) => [
      ...currentGoals.map((goal) => {
        if (goal.id === id) {
          goal.completed = !goal.completed;
        }
        return goal;
      }),
    ]);
  }

  useEffect(() => {
    setCompletedGoals({
      completed: courseGoals.filter((goal) => goal.completed === true).length,
      uncompleted: courseGoals.filter((goal) => goal.completed === false)
        .length,
    });
  }, [courseGoals]);

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="Add New Goal"
          color="#a065ec"
          onPress={startAddGoalHandler}
        />
        <GoalInput
          onAddGoal={addGoalHandler}
          visible={modalVisible}
          onCancel={endGoalHandler}
        />
        <View>
          <Summary
            completedGoals={completedGoals.completed}
            uncompletedGoals={completedGoals.uncompleted}
          />
        </View>

        <View style={styles.goalsContainer}>
          <FlatList
            data={courseGoals}
            renderItem={({ item }) => {
              return (
                <GoalItem
                  item={item}
                  onCompletedItem={completeGoalHandler}
                  onDeleteItem={deleteGoalHandler}
                />
              );
            }}
            keyExtractor={(item) => item.id}
            alwaysBounceVertical={false}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 55,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 5,
  },
});
