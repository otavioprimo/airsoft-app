import React, {createRef, useState} from 'react';
import {TextInput, Platform} from 'react-native';
import {faEnvelope} from '@fortawesome/free-regular-svg-icons';
import {faLock} from '@fortawesome/free-solid-svg-icons';
import {useDispatch, useSelector} from 'react-redux';

import Input from '#/core/components/Input';

import {
  Background,
  Overlay,
  Container,
  LoginButton,
  LoginButtonText,
  ContainerInputs,
  SafeArea,
  ForgotPassword,
  ForgotPasswordText,
  CreateAccountContainer,
  DontHaveAccountText,
  CreateAccountText,
  CreateAccounButton,
  ErrorText,
  TextOr,
  ContainerTextOr,
  LineTextOr,
  ContainerSocial,
  ContainerSocialIOS,
  Google,
  Facebook,
  Apple,
} from './styles';
import Logo from '~/modules/core/components/Logo';
import {AuthActions} from '../../redux/reducer/auth.reducer';
import {
  authErrorSelector,
  authLoadingSelector,
} from '../../redux/selectors/auth.selector';

interface Props {
  navigation?: any;
}

export default function LoginScreen({navigation}: Props) {
  let inputPassword: React.RefObject<TextInput> = createRef();

  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const authError = useSelector(authErrorSelector);
  const authLoading = useSelector(authLoadingSelector);

  const submitLogin = () => {
    if (email.trim().length > 0 && password.trim().length >= 6)
    dispatch(AuthActions.login(email, password));
  };

  const signUp = () => {
    navigation.navigate('Signup');
  };

  const renderContainerSocial = () => {
    if (Platform.OS === 'ios') {
      return (
        <ContainerSocialIOS>
          <Apple />
          <Google />
          <Facebook />
        </ContainerSocialIOS>
      );
    }

    return (
      <ContainerSocial>
        <Google />
        <Facebook />
      </ContainerSocial>
    );
  };

  return (
    <SafeArea>
      <Container>
        <Logo />
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
            returnKeyType="next"
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

          {authError && <ErrorText>{authError}</ErrorText>}

          <LoginButton
            disabled={!email || password.trim().length < 6 || authLoading}
            onPress={submitLogin}>
            <LoginButtonText>
              {authLoading ? 'Verificando' : 'Entrar'}
            </LoginButtonText>
          </LoginButton>
        </ContainerInputs>
        <ForgotPassword>
          <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>
        </ForgotPassword>

        <CreateAccountContainer>
          <DontHaveAccountText>Não tem uma conta?</DontHaveAccountText>
          <CreateAccounButton onPress={signUp}>
            <CreateAccountText>Cadastre-se aqui</CreateAccountText>
          </CreateAccounButton>
        </CreateAccountContainer>

        <ContainerTextOr>
          <LineTextOr />
          <TextOr>OU</TextOr>
          <LineTextOr />
        </ContainerTextOr>

        {renderContainerSocial()}
      </Container>
    </SafeArea>
  );
}
