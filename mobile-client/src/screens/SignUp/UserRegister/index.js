import React, { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import { StyleSheet, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import {
  Container,
  EmailInput,
  PasswordInput,
  Logo,
  CpfInput,
  NameInput,
  PhoneInput,
  RegisterButton,
  ButtonTextRegister,
  TitleText,
  DataShow,
  DateButton,
  DateContainer,
} from "./styles";

const UserRegister = ({ navigation }) => {
  const [date, setDate] = useState(Date.now());
  const [showDatePicker, setShowDatePicker] = useState(false);
  function changeDate(value) {
    console.log(value);
  }
  return (
    <Container>
      <Logo source={require("../../../../assets/images/icon-icademy.png")} />
      <TitleText>Dados pessoais:</TitleText>
      <NameInput placeholder="Seu nome" />
      <EmailInput placeholder="Seu melhor email..." />
      <CpfInput placeholder="Seu cpf" />
      <PhoneInput placeholder="Seu número de telefone" />
      <Text>Data de nascimento:</Text>
      <DateContainer>
        <DataShow>{date}</DataShow>
        <DateButton
          onPress={() => {
            setShowDatePicker(true);
          }}
        >
          <MaterialCommunityIcons name="calendar" size={30} color="#FFF" />
        </DateButton>
      </DateContainer>
      {showDatePicker ? (
        <DateTimePicker
          testID="dateTimePicker"
          timeZoneOffsetInMinutes={0}
          value={date}
          mode="date"
          onChange={(value) => {
            changeDate(value);
            setShowDatePicker(false);
          }}
          display="default"
        />
      ) : null}
      <RegisterButton
        onPress={() => {
          navigation.navigate("UserRegisterPassword");
        }}
      >
        <ButtonTextRegister>Avançar</ButtonTextRegister>
      </RegisterButton>
    </Container>
  );
};

const styles = StyleSheet.create({
  date: {
    width: 300,
    borderRadius: 5,
    borderColor: "#6665",
    marginTop: 10,
  },
});

export default UserRegister;
