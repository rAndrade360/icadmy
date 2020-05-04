import styled from "styled-components/native";
import colors from "../../constants/Colors";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.Image`
  margin-bottom: 15px;
`;

export const EmailInput = styled.TextInput`
  width: 80%;
  padding: 15px;
  border: 1px solid #5555;
  margin: 5px 0;
  border-radius: 12px;
`;

export const PasswordInput = styled.TextInput`
  width: 80%;
  padding: 15px;
  border: 1px solid #5555;
  margin: 20px 0;
  border-radius: 12px;
`;

export const LoginButton = styled.TouchableOpacity`
  width: 80%;
  padding: 15px;
  margin: 20px 0;
  background-color: ${colors.logginbutton};
  border-radius: 12px;
  justify-content: center;
  align-items: center;
`;

export const ButtonTextLogin = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 17px;
  font-family: sans-serif;
`;

export const RegisterButton = styled.TouchableOpacity`
  width: 80%;
  padding: 12px;
  margin: 20px 0;
  margin-top: 30px;
  background-color: ${colors.registerbutton};
  border-radius: 12px;
  justify-content: center;
  align-items: center;
`;

export const ButtonTextRegister = styled.Text`
  color: #666;
  font-weight: bold;
  font-size: 17px;
  font-family: sans-serif;
`;
