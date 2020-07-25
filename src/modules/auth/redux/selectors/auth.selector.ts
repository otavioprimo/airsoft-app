import {AplicationState} from '~/modules';
import {SingupMetadata} from '../types';

export const authLoadingSelector = (state: AplicationState) =>
  state.auth.loading;

export const authErrorSelector = (state: AplicationState) => state.auth.error;

export const signupMetaData = (state: AplicationState): SingupMetadata => {
  return {
    loading: state.auth.signup.loading,
    error: state.auth.signup.error,
  };
};
