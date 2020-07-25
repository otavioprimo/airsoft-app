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
  ErrorText,
} from './styles';
import BackButton from '~/modules/core/components/BackButton';
import {useDispatch, useSelector} from 'react-redux';
import {AuthActions} from '../../redux/reducer/auth.reducer';
import {signupMetaData} from '../../redux/selectors/auth.selector';
import LoadingOverlay from '~/modules/core/components/LoadingOverlay';

export default function LoginScreen() {
  const dispatch = useDispatch();

  let inputUsername: React.RefObject<TextInput> = createRef();
  let inputEmail: React.RefObject<TextInput> = createRef();
  let inputPassword: React.RefObject<TextInput> = createRef();
  let inputConfirmPassword: React.RefObject<TextInput> = createRef();

  const {error, loading} = useSelector(signupMetaData);

  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [errorMessage, setErrorMessage] = useState('');

  const validateForm = () => {
    if (name.trim().length === 0) {
      setErrorMessage('Preencha seu nome');
      return false;
    } else if (username.trim().length === 0) {
      setErrorMessage('Preencha um nome de usuário');
      return false;
    } else if (email.trim().length === 0) {
      setErrorMessage('Preencha um email');
      return false;
    } else if (password.trim().length < 6 && password.trim().length <= 20) {
      setErrorMessage('Sua senha deve conter entre 6 e 20 digítos');
      return false;
    } else if (confirmPassword !== password) {
      setErrorMessage('As senhas não são iguais');
      return false;
    }

    setErrorMessage('');
    return true;
  };

  const submitLogin = () => {
    if (validateForm()) {
      dispatch(
        AuthActions.signup(name, email, username, password, confirmPassword),
      );
    }
  };

  return (
    <SafeArea>
      <LoadingOverlay visible={loading} />
      <ScrollView>
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
                onSubmitEditing={() => {
                  inputConfirmPassword.current?.focus();
                }}
              />
              <Input
                placeholder="Confirme a senha"
                autoCorrect
                autoCapitalize="none"
                leftIcon={faLock}
                secureTextEntry={true}
                onChangeText={setConfirmPassword}
                value={confirmPassword}
                ref={inputConfirmPassword}
                onSubmitEditing={submitLogin}
              />
            </KeyboardAvoidingView>

            <LoginButton onPress={submitLogin}>
              <LoginButtonText>Cadastrar</LoginButtonText>
            </LoginButton>

            <ErrorText>{errorMessage || error}</ErrorText>
          </ContainerInputs>
        </Container>
      </ScrollView>
    </SafeArea>
  );
}
