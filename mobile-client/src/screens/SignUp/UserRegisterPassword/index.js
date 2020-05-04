import React, { useState } from "react";
import { StyleSheet, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import {
  Container,
  PasswordInput,
  Logo,
  RegisterButton,
  ButtonTextRegister,
  TitleText,
} from "./styles";

const UserRegisterPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(false);
  function changeConfirmPassword(value = confirmPassword, pass = password) {
    if (pass !== value) {
      return setError(true);
    }
    return setError(false);
  }
  function changePassword(value) {
    setPassword(value);
    changeConfirmPassword(confirmPassword, value);
  }
  return (
    <Container>
      <Logo source={require("../../../../assets/images/icon-icademy.png")} />
      <TitleText>Registrar senha:</TitleText>
      <PasswordInput
        placeholder="Insira sua senha"
        onChangeText={changePassword}
        secureTextEntry={true}
      />
      <PasswordInput
        placeholder="Confirme sua senha"
        onChangeText={changeConfirmPassword}
        secureTextEntry={true}
      />
      {error ? (
        <RegisterButton style={{ backgroundColor: "#ccc" }}>
          <ButtonTextRegister style={{ color: "#333" }}>
            Avançar
          </ButtonTextRegister>
        </RegisterButton>
      ) : (
        <RegisterButton>
          <ButtonTextRegister>Avançar</ButtonTextRegister>
        </RegisterButton>
      )}
    </Container>
  );
};

export default UserRegisterPassword;
