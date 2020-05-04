import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";

// import { Container } from './styles';
const Tabs = createBottomTabNavigator();
const HomeNavigator = () => {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name="Home" component={Home} />
    </Tabs.Navigator>
  );
};

export default HomeNavigator;
