import styled from 'styled-components/native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {Button} from '../commonStyle';

import {ThemeProps} from '~/interfaces/ThemeProps';

export const ButtonSocial = styled(Button)`
  background-color: ${({theme}: ThemeProps) => theme.google};
  margin-top: 8px;
  margin-bottom: 8px;
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
