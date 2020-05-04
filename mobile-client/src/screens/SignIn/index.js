import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import {
  Container,
  Logo,
  EmailInput,
  PasswordInput,
  LoginButton,
  ButtonTextLogin,
  RegisterButton,
  ButtonTextRegister,
} from "./styles";

export default function SignIn({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Container>
      <Logo source={require("../../../assets/images/icon-icademy.png")} />
      <EmailInput
        placeholder="Seu melhor email..."
        onChangeText={setEmail}
        value={email}
      />
      <PasswordInput
        secureTextEntry={true}
        onChangeText={setPassword}
        placeholder="Sua discretíssima senha..."
        value={password}
      />
      <LoginButton>
        <ButtonTextLogin>Entrar</ButtonTextLogin>
      </LoginButton>
      <RegisterButton onPress={() => navigation.navigate("SignUp")}>
        <ButtonTextRegister>Cadastrar</ButtonTextRegister>
      </RegisterButton>
    </Container>
  );
}
