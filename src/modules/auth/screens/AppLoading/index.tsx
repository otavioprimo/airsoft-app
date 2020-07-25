import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';

import {Container, LoadingIndicator} from './styles';
import {AuthActions} from '../../redux/reducer/auth.reducer';
import {isMountedRef, navigationRef} from '~/utils/rootNavigation';

interface AppLoadingProps {
  navigation: any;
}

const AppLoading: React.FC<AppLoadingProps> = ({navigation}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(AuthActions.initApp());
  }, []);

  return (
    <Container>
      <LoadingIndicator />
    </Container>
  );
};

export default React.memo(AppLoading);
