import React, {createRef, useState} from 'react';
import {TextInput} from 'react-native';
import {faEnvelope} from '@fortawesome/free-regular-svg-icons';
import {faLock} from '@fortawesome/free-solid-svg-icons';

import Input from '#/core/components/Input';

import {Container, ContainerInputs} from './styles';

export default function LoginScreen() {
  let inputPassword: React.RefObject<TextInput> = createRef();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitLogin = () => {
    console.log('submit');
  };

  return (
    <Container>
      <ContainerInputs>
        <Input
          leftIcon={faEnvelope}
          placeholder="Email"
          autoCapitalize="none"
          autoCorrect
          autoCompleteType="email"
          keyboardType="email-address"
          blurOnSubmit={false}
          onChangeText={setEmail}
          value={email}
          onSubmitEditing={() => {
            inputPassword.current?.focus();
          }}
        />
        <Input
          placeholder="Senha"
          autoCorrect
          autoCapitalize="none"
          leftIcon={faLock}
          secureTextEntry={true}
          onChangeText={setPassword}
          value={password}
          ref={inputPassword}
          onSubmitEditing={submitLogin}
        />
      </ContainerInputs>
    </Container>
  );
}
