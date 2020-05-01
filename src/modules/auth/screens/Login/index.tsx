import * as React from 'react';

import {useDispatch} from 'react-redux';
import {Container, Button, Text} from './styles';
// import {Action as authAction} from '~/modules/auth/redux/reducer/auth.reducer';
import {AuthActions} from '#/auth/redux/reducer/auth.reducer';

export default function LoginScreen() {
  const dispatch = useDispatch();

  const teste = () => {
    dispatch(AuthActions.login('otavioprimo@gmail.com', '123456'));
  };

  return (
    <Container>
      <Button onPress={teste}>
        <Text>AQUI É A HOME</Text>
      </Button>
    </Container>
  );
}
