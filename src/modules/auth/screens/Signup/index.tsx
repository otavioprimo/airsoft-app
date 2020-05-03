import React, {createRef, useState} from 'react';
import {TextInput, KeyboardAvoidingView} from 'react-native';
import {faEnvelope} from '@fortawesome/free-regular-svg-icons';
import {faLock, faUser} from '@fortawesome/free-solid-svg-icons';
import {faUserCircle} from '@fortawesome/free-regular-svg-icons';

import Input from '#/core/components/Input';

import {
  Background,
  Overlay,
  Container,
  LoginButton,
  LoginButtonText,
  ContainerInputs,
  SafeArea,
  ScrollView,
} from './styles';
import BackButton from '~/modules/core/components/BackButton';

export default function LoginScreen() {
  let inputUsername: React.RefObject<TextInput> = createRef();
  let inputEmail: React.RefObject<TextInput> = createRef();
  let inputPassword: React.RefObject<TextInput> = createRef();

  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitLogin = () => {
    console.log('submit');
  };

  return (
    <SafeArea>
      <Background source={require('~/assets/cave.jpg')}>
        <ScrollView>
          <Overlay />
          <BackButton />
          <Container>
            <ContainerInputs>
              <KeyboardAvoidingView behavior="padding">
                <Input
                  leftIcon={faUser}
                  placeholder="Nome"
                  autoCorrect
                  blurOnSubmit={false}
                  onChangeText={setName}
                  value={name}
                  returnKeyType="next"
                  onSubmitEditing={() => {
                    inputUsername.current?.focus();
                  }}
                />
                <Input
                  leftIcon={faUserCircle}
                  placeholder="Usuário"
                  autoCapitalize="none"
                  autoCorrect
                  blurOnSubmit={false}
                  onChangeText={setUsername}
                  value={username}
                  returnKeyType="next"
                  ref={inputUsername}
                  onSubmitEditing={() => {
                    inputEmail.current?.focus();
                  }}
                />
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
                  returnKeyType="next"
                  ref={inputEmail}
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
              </KeyboardAvoidingView>

              <LoginButton onPress={submitLogin}>
                <LoginButtonText>Cadastrar</LoginButtonText>
              </LoginButton>
            </ContainerInputs>
          </Container>
        </ScrollView>
      </Background>
    </SafeArea>
  );
}
