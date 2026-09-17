import { View, Pressable } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import type { BottomTabBarProps } from "@react-navigation/bottom-tabs";

export default function Menu({
  state,
  navigation,
}: BottomTabBarProps) {
  return (
    <View className="absolute bottom-10 left-0 right-0 h-20 bg-white border-t border-gray-200 flex-row justify-around items-center px-6">
      
      <Pressable onPress={() => navigation.navigate("Home")}>
        <MaterialIcons
          name="home"
          size={32}
          color={
            state.routes[state.index].name === "Home"
              ? "blue"
              : "gray"
          }
        />
      </Pressable>

      <Pressable onPress={() => navigation.navigate("AddTask")}>
        <MaterialIcons
          name="add"
          size={32}
          color={
            state.routes[state.index].name === "AddTask"
              ? "blue"
              : "lightblue"
          }
        />
      </Pressable>

      <Pressable onPress={() => navigation.navigate("Calendar")}>
        <MaterialIcons
          name="calendar-month"
          size={32}
          color="lightgreen"
        />
      </Pressable>

    </View>
  );
}