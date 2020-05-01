import styled from 'styled-components/native';
import {ThemeProps} from '~/interfaces/ThemeProps';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
  background: #fff;
`;

export const Text = styled.Text`
  color: ${(props: ThemeProps) => props.theme.textPrimary};
`;

export const Button = styled.TouchableOpacity`
  padding: 16px;
  background-color: ${(props: ThemeProps) => props.theme.primary};
`;
