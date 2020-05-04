import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SignUp from "../screens/SignUp";

// import { Container } from './styles';
const Stack = createStackNavigator();
export default function SignUpNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="" component={HomeNavigator} />{" "}
    </Stack.Navigator>
  );
}
