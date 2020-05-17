import React, {createRef, useState} from 'react';
import {TextInput} from 'react-native';
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
  // TextOr,
  // ContainerTextOr,
  // LineTextOr,
  // ContainerSocial,
  // ContainerSocialIOS,
  // Google,
  // Facebook,
  // Apple,
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
    dispatch(AuthActions.login(email, password));
  };

  const signUp = () => {
    navigation.navigate('Signup');
  };

  /* TODO login social fora da Beta
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
  */

  return (
    <SafeArea>
      <Background source={require('~/assets/cave.jpg')}>
        <Overlay />
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
              disabled={!email || !password || authLoading}
              onPress={submitLogin}>
              <LoginButtonText>
                {authLoading ? 'Loading' : 'Entrar'}
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

          {/* <ContainerTextOr>
            <LineTextOr />
            <TextOr>OU</TextOr>
            <LineTextOr />
          </ContainerTextOr> */}

          {/* {renderContainerSocial()} */}
        </Container>
      </Background>
    </SafeArea>
  );
}
