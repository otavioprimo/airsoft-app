import styled from 'styled-components/native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

import {ThemeProps} from '~/interfaces/ThemeProps';

export const ContainerInput = styled.View`
  flex-direction: row;
  padding-bottom: 10px;
`;

export const InputText = styled.TextInput.attrs(({theme}: ThemeProps) => ({
  placeholderTextColor: theme.secondary,
}))`
  color: ${({theme}: ThemeProps) => theme.secondary};
  font-size: 16px;
  border-bottom-color: ${({theme}: ThemeProps) => theme.secondary};
  border-bottom-width: 1px;
  flex: 1;
  font-family: ${({theme}: ThemeProps) => theme.fontFamily};
`;

export const ContainerIcon = styled.View`
  padding: 8px;
  justify-content: center;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-color: ${({theme}: ThemeProps) => theme.secondary};
`;

export const Icon = styled(FontAwesomeIcon).attrs(({theme}: ThemeProps) => ({
  size: 20,
  color: theme.secondary,
}))``;
