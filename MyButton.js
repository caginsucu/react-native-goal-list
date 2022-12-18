import { View, Button, Pressable, Text } from "react-native";

function MyButton({ title = "deneme", type = "default", onPress }) {
  return (
    <View>
      {type == "default" ? (
        <Button title={title} color="#383838" onPress={onPress} />
      ) : (
        <Pressable
          onPress={onPress}
          style={({ pressed }) => [
            {
              backgroundColor: pressed ? "#e6e6e6" : "#383838",
            },
            {
              borderColor: "#e6e6e6",
              margin: 5,
              padding: 5,
              paddingHorizontal: 30,
              borderRadius: 5,
            },
          ]}
          children={({ pressed }) => (
            <Text
              style={{
                color: pressed ? "#383838" : "#e6e6e6",
                fontSize: 24,
                textTransform: "uppercase",
              }}
            >
              {pressed ? "Pressed" : "Press Me!"}
            </Text>
          )}
        />
      )}
    </View>
  );
}

export default MyButton;
