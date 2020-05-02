import styled from 'styled-components/native';

import {Button} from '../commonStyle';

import {ThemeProps} from '~/interfaces/ThemeProps';

export const ButtonSocial = styled(Button)`
  background-color: ${({theme}: ThemeProps) => theme.google};
  margin-top: 8px;
  margin-bottom: 8px;
`;
