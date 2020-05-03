import styled from 'styled-components/native';

import {ThemeProps} from '~/interfaces/ThemeProps';

export const Background = styled.ImageBackground`
  flex: 1;
`;

export const ScrollView = styled.ScrollView`
  flex: 1;
`;

export const Overlay = styled.View`
  width: 100%;
  height: 100%;
  background-color: rgba(10, 0, 0, 0.7);
  position: absolute;
  z-index: 1;
`;

export const SafeArea = styled.SafeAreaView`
  flex: 1;
  background: ${({theme}: ThemeProps) => theme.background};
`;

export const Container = styled.View`
  margin-top: 16px;
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
