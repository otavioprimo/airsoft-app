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
  font-size: 18px;
  border-bottom-color: ${({theme}: ThemeProps) => theme.secondary};
  border-bottom-width: 1px;
  flex: 1;
  text-align: center;
`;

export const ContainerIcon = styled.View`
  padding: 8px;
  justify-content: center;
  align-items: center;
`;

export const Icon = styled(FontAwesomeIcon).attrs(({theme}: ThemeProps) => ({
  size: 25,
  color: theme.secondary,
}))``;
