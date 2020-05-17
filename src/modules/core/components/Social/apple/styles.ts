import styled from 'styled-components/native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

import {Button} from '../commonStyle';

import {ThemeProps} from '~/interfaces/ThemeProps';

export const ButtonSocial = styled(Button)`
  background-color: ${({theme}: ThemeProps) => theme.apple};
  color: ${({theme}: ThemeProps) => theme.textSecondary};
  margin-top: 8px;
  margin-bottom: 8px;
`;

export const Text = styled.Text`
  font-family: ${({theme}: ThemeProps) => theme.fontFamilySecondary};
  color: ${({theme}: ThemeProps) => theme.textSecondary};
  font-size: 16px;
`;

export const Icon = styled(FontAwesomeIcon).attrs((props: ThemeProps) => ({
  size: 20,
  color: props.theme.textSecondary,
}))`
  margin-right: 8px;
`;
