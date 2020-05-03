import styled from 'styled-components/native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

import {ThemeProps} from '~/interfaces/ThemeProps';

export const Button = styled.TouchableOpacity`
  height: 45px;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  flex-direction: row;
  flex: 1;
  margin-left: 4px;
  margin-right: 4px;
`;

export const Text = styled.Text`
  font-family: ${({theme}: ThemeProps) => theme.fontFamilySecondary};
  color: ${({theme}: ThemeProps) => theme.textPrimary};
  font-size: 16px;
`;

export const Icon = styled(FontAwesomeIcon).attrs(() => ({
  size: 20,
  color: '#fff',
}))`
  margin-right: 8px;
`;
