import styled from 'styled-components/native';

import {ThemeProps} from '~/interfaces/ThemeProps';

export const Background = styled.ImageBackground`
  flex: 1;
`;

export const Overlay = styled.View`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  position: absolute;
  z-index: 1;
`;

export const SafeArea = styled.SafeAreaView`
  flex: 1;
  background: ${({theme}: ThemeProps) => theme.background};
`;

export const Container = styled.View`
  padding-left: 40px;
  padding-right: 40px;
  z-index: 2;
`;

export const ContainerInputs = styled.View`
  margin-top: 8px;
`;

export const LoginButton = styled.TouchableOpacity`
  background-color: ${({theme}: ThemeProps) => theme.secondary};
  height: 40px;
  justify-content: center;
  align-items: center;
  margin-top: 12px;
`;

export const LoginButtonText = styled.Text`
  font-family: ${({theme}: ThemeProps) => theme.fontFamilySecondary};
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
  margin-bottom: 16px;
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
  font-size: 18px;
`;

export const ContainerSocial = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
`;

export const ContainerSocialIOS = styled.View`
  flex: 1;
`;
