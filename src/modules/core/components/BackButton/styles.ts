import styled from 'styled-components/native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {ThemeProps} from '~/interfaces/ThemeProps';

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100px;
  margin: 16px;
  z-index: 10;
  padding: 8px;
`;

export const TextBack = styled.Text`
  font-family: ${({theme}: ThemeProps) => theme.fontFamilySecondary};
  color: ${({theme}: ThemeProps) => theme.secondary};
  font-size: 16px;
`;

export const Icon = styled(FontAwesomeIcon).attrs(({theme}: ThemeProps) => ({
  size: 25,
  color: theme.secondary,
}))``;
