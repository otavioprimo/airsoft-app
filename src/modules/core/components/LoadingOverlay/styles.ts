import styled from 'styled-components/native';
import {Dimensions} from 'react-native';
import {ThemeProps} from '~/interfaces/ThemeProps';

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('screen');

export const Container = styled.View`
  background-color: ${({theme}: ThemeProps) => theme.overlay};
  width: ${SCREEN_WIDTH}px;
  height: ${SCREEN_HEIGHT}px;
  position: absolute;
  z-index: 100;
  align-items: center;
  justify-content: center;
`;

export const LoadingIndicator = styled.ActivityIndicator.attrs(
  ({theme}: ThemeProps) => ({
    size: 'large',
    color: theme.secondaryStrong,
  }),
)``;
