import styled from 'styled-components/native';

import {ThemeProps} from '~/interfaces/ThemeProps';

export const ScrollView = styled.ScrollView``;

export const SafeArea = styled.SafeAreaView`
  flex: 1;
  background: ${({theme}: ThemeProps) => theme.background};
`;

export const Container = styled.View`
  padding-left: 40px;
  padding-right: 40px;
`;

export const ContainerInputs = styled.View`
  margin-top: 8px;
`;

export const LoginButton = styled.TouchableOpacity`
  background-color: ${({theme}: ThemeProps) => theme.secondary};
  height: 50px;
  justify-content: center;
  align-items: center;
  margin-top: 24px;
`;

export const LoginButtonText = styled.Text`
  font-family: ${({theme}: ThemeProps) => theme.fontFamily};
  color: ${({theme}: ThemeProps) => theme.primary};
  font-size: 22px;
`;

export const ForgotPassword = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  padding: 16px;
  margin-top: 8px;
`;

export const ForgotPasswordText = styled.Text`
  font-family: ${({theme}: ThemeProps) => theme.fontFamily};
  color: ${({theme}: ThemeProps) => theme.secondary};
`;

export const CreateAccountContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  margin-top: 16px;
`;

export const DontHaveAccountText = styled.Text`
  font-family: ${({theme}: ThemeProps) => theme.fontFamily};
  color: ${({theme}: ThemeProps) => theme.secondary};
  margin-right: 8px;
`;

export const CreateAccounButton = styled.TouchableOpacity``;

export const CreateAccountText = styled.Text`
  font-family: ${({theme}: ThemeProps) => theme.fontFamily};
  color: ${({theme}: ThemeProps) => theme.textPrimary};
`;

export const ContainerTextOr = styled.View`
  margin-top: 32px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const LineTextOr = styled.View`
  height: 1px;
  border-bottom-width: 1px;
  border-bottom-color: #fff;
  flex: 1;
`;

export const TextOr = styled.Text`
  font-family: ${({theme}: ThemeProps) => theme.fontFamily};
  color: ${({theme}: ThemeProps) => theme.secondary};
  margin-right: 4px;
  margin-left: 4px;
  font-size: 20px;
`;

export const ContainerSocial = styled.View`
  margin-top: 16px;
  /* flex-direction: row; */
  /* justify-content: space-around; */
`;
