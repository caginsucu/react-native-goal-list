import {
  StyleSheet,
  View,
  Pressable,
  Text,
  Modal,
  Button,
  TouchableOpacity,
  Image,
} from "react-native";
import { useState } from "react";

function GoalItem({ item, onDeleteItem, onCompletedItem }) {
  const [modalVisible, setModalVisible] = useState(false);

  function deleteHandler() {
    onDeleteItem(item.id);
    setModalVisible(false);
  }

  function modalHandler() {
    setModalVisible(true);
  }

  function completedHandler() {
    onCompletedItem(item.id);
  }

  return (
    <View style={styles.goalItem}>
      <Modal transparent={true} visible={modalVisible} animationType="slide">
        <TouchableOpacity
          visible={modalVisible}
          onPress={() => setModalVisible(false)}
          style={{ flex: 1, backgroundColor: "rgba(0,0,0,0)" }}
          transparent={true}
        >
          <View style={styles.deleteModal}>
            <View style={styles.modalContent}>
              <Text>Are you sure you want to delete this goal?</Text>
              <View style={styles.buttonContainer}>
                <View style={styles.button}>
                  <Button
                    title="Cancel"
                    color={"#b180f0"}
                    onPress={() => setModalVisible(false)}
                  />
                </View>
                <View style={styles.button}>
                  <Button
                    title="Delete"
                    color={"#f31282"}
                    onPress={deleteHandler}
                  />
                </View>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </Modal>
      <Pressable
        android_ripple={{ color: "#210644" }}
        style={({ pressed }) => [
          pressed && styles.pressed,
          styles.pressableItem,
        ]}
      >
        <Pressable style={styles.goalContent} onPress={completedHandler}>
          <Text
            style={[
              {
                textDecorationLine: item.completed ? "line-through" : "none",
                fontStyle: item.completed ? "italic" : "normal",
              },
              styles.goalText,
            ]}
          >
            {item.text}
          </Text>
        </Pressable>
        <Pressable onPress={modalHandler}>
          <Image
            style={styles.image}
            source={require("../assets/images/remove-light.png")}
          />
        </Pressable>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    flexDirection: "row",
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
    color: "#ffffff",
    overflow: "hidden",
    padding: 8,
  },
  deleteModal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "#e4d0ff",
    padding: 16,
    borderRadius: 6,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    width: "30%",
    marginHorizontal: 8,
  },
  pressed: {
    opacity: 0.9,
  },
  pressableItem: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
  goalContent: {
    flex: 1,
  },
  goalText: {
    // backgroundColor: "#311b6b",
    color: "#ffffff",
    padding: 8,
    width: "100%",
  },
  image: {
    width: 30,
    height: 30,
  },
});
