import styled from 'styled-components/native';

import {ThemeProps} from '~/interfaces/ThemeProps';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: ${({theme}: ThemeProps) => theme.background};
`;

export const ContainerInputs = styled.View`
  padding-left: 32px;
  padding-right: 40px;
`;
