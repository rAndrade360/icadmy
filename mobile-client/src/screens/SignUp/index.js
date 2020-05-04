import React from "react";
import { View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import UserRegister from "./UserRegister";
import UserRegisterPassword from "./UserRegisterPassword";
import AddresRegister from "./AddresRegister";

// import { Container } from './styles';
const Stack = createStackNavigator();
const SignUp = () => {
  return (
    <Stack.Navigator initialRouteName="UserRegister">
      <Stack.Screen
        name={"UserRegister"}
        component={UserRegister}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={"UserRegisterPassword"}
        component={UserRegisterPassword}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={"AddresRegister"}
        component={AddresRegister}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default SignUp;
