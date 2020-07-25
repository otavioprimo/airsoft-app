import Axios from 'axios';
import {getUrl} from './api.helper';
import {ApiActions} from './api.types';
import SignUpRequest from '~/interfaces/ApiRequests/UserRequest/SignUpRequest';
import LoginRequest from '~/interfaces/ApiRequests/AuthRequest/LoginRequest';
import SignUpResponse from '~/interfaces/ApiResponse/UserResponse/SignUpResponse';
import LoginResponse from '~/interfaces/ApiResponse/AuthResponse/LoginResponse.ts';

const signup = async (request: SignUpRequest): Promise<SignUpResponse> => {
  const response = await Axios.post(
    getUrl({version: 1, action: ApiActions.User.create}),
    request,
  );

  return response.data;
};

const login = async (request: LoginRequest): Promise<LoginResponse> => {
  const response = await Axios.post(
    getUrl({version: 1, action: ApiActions.Auth.loginWithEmail}),
    request,
  );

  return response.data;
};

export default {
  signup,
  login,
};
