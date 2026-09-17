import { createStaticNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "../screens/Home";
import AddTask from "../screens/AddTask";
import Menu from "../components/menu/Menu";
import Calendar from "../screens/Calendar";

const RootTabs = createBottomTabNavigator({
  tabBar: (props) => <Menu {...props} />,

  screens: {
    Home: {
      screen: Home,
      options: {
        headerShown: false,
      },
    },

    AddTask: {
      screen: AddTask,
      options: {
        headerShown: false,
      },
    },

    Calendar: {
      screen: Calendar,
      options: {
        headerShown: false,
      },
    },
  },
});

export const Navigation = createStaticNavigation(RootTabs);