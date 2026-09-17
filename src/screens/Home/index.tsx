import { View, Text } from "react-native";
import TopBar from "../../components/topBar/TopBar";
import ListCard from "./components/ListCard";

export default function Home() {
  return (
    <View className="flex-1">
      <TopBar title="Home" />

      <View className="flex-1 items-center justify-center">
        <View className="w-full flex-row flex-wrap justify-center gap-3">
          <ListCard />
          <ListCard />
          <ListCard />
          <ListCard />
          <ListCard />
          <ListCard />
        </View>
      </View>
    </View>
  );
}