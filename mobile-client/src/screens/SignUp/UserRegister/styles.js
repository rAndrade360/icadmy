import styled from "styled-components/native";
import colors from "../../../constants/Colors";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
export const DateContainer = styled.View`
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const Logo = styled.Image`
  width: 82px;
  height: 100px;
  margin: 20px 0;
`;

export const TitleText = styled.Text`
  color: #666;
  font-size: 18px;
  font-weight: bold;
`;

export const EmailInput = styled.TextInput`
  width: 80%;
  padding: 12px;
  border: 1px solid #5555;
  margin: 5px 0;
  border-radius: 12px;
`;

export const NameInput = styled.TextInput`
  width: 80%;
  padding: 12px;
  border: 1px solid #5555;
  margin: 5px 0;
  border-radius: 12px;
`;

export const CpfInput = styled.TextInput`
  width: 80%;
  padding: 12px;
  border: 1px solid #5555;
  margin: 5px 0;
  border-radius: 12px;
`;

export const PhoneInput = styled.TextInput`
  width: 80%;
  padding: 12px;
  border: 1px solid #5555;
  margin: 5px 0;
  border-radius: 12px;
`;

export const DataShow = styled.Text`
  margin: 5px 0;
`;

export const RegisterButton = styled.TouchableOpacity`
  width: 80%;
  padding: 15px;
  margin: 20px 0;
  background-color: ${colors.logginbutton};
  border-radius: 12px;
  justify-content: center;
  align-items: center;
`;

export const DateButton = styled.TouchableOpacity`
  width: 20%;
  padding: 10px;
  margin: 10px;
  background-color: ${colors.logginbutton};
  border-radius: 12px;
  justify-content: center;
  align-items: center;
`;

export const ButtonTextRegister = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 17px;
  font-family: sans-serif;
`;
