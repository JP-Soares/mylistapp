import { View, Text } from "react-native";
import TopBar from "../../components/topBar/TopBar";

export default function Home() {
  return (
    <View className="flex-1 justify-center items-center">
      <TopBar title="Home"></TopBar>
      <Text className="text-xl font-bold">
        <View className="">

        </View>
      </Text>
    </View>
  );
}