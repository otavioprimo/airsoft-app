import styled from 'styled-components/native';
import {ThemeProps} from '~/interfaces/ThemeProps';

export const Container = styled.View`
  background-color: ${({theme}: ThemeProps) => theme.background};
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const LoadingIndicator = styled.ActivityIndicator.attrs(
  ({theme}: ThemeProps) => ({
    size: 'large',
    color: theme.secondaryStrong,
  }),
)``;
