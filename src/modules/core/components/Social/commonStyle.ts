import styled from 'styled-components/native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

import {ThemeProps} from '~/interfaces/ThemeProps';

export const Button = styled.TouchableOpacity`
  height: 50px;
  justify-content: center;
  align-items: center;
  background-color: blue;
  flex-direction: row;
  border-radius: 20px;
`;

export const Text = styled.Text`
  font-family: ${({theme}: ThemeProps) => theme.fontFamily};
  color: ${({theme}: ThemeProps) => theme.textPrimary};
  font-size: 18px;
`;

export const Icon = styled(FontAwesomeIcon).attrs(() => ({
  size: 20,
  color: '#fff',
}))`
  margin-right: 8px;
`;
