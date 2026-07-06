import { View, Text, Pressable } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function Menu() {
  return (
    <View className="absolute bottom-10 left-0 right-0 h-20 bg-white border-t border-gray-200 flex-row justify-around items-center px-6">
      <Pressable onPress={() => console.log("home button")}>
        <MaterialIcons
          name="home"
          size={32}
          color="gray"
        />
      </Pressable>

      <Pressable>
        <MaterialIcons 
          name="add"
          size={32}
          color="lightblue"
        />
      </Pressable>

      <Pressable>
        <MaterialIcons 
          name="calendar-month"
          size={32}
          color="lightgreen"
        />
      </Pressable>
    </View>
  );
}