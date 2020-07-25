import axios from 'axios';
import {ApiActions} from '../services/api.types';
import {getUrl} from '../services/api.helper';
import {Store} from './store';
import {SessionActions} from '~/modules/session/redux/reducer/session.reducer';
import RefreshTokenResponse from '~/interfaces/ApiResponse/AuthResponse/RefreshTokenResponse';

/**
 * middleware para as chamadas do axios
 * interceipta a resposta do axios
 * Se ele retornar com status 401, quer dizer que o token está inválido
 * Ele tenta pegar um novo token e refazer a chamada que deu o status 401
 */
axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      const state = Store.getState();
      const {refreshToken} = state.session;

      return axios
        .post(getUrl({version: 1, action: ApiActions.Auth.refreshToken}), {
          refreshToken,
        })
        .then((tokenResponse) => {
          // Save tokens and do the request again
          const data: RefreshTokenResponse = tokenResponse.data;

          Store.dispatch(
            SessionActions.setTokens(data.token, data.refreshToken),
          );
          axios.defaults.headers.common.Authorization = data.token;
          originalRequest.headers.Authorization = data.token;
          return axios(originalRequest);
        })
        .catch((errorAuth) => {
          return Promise.reject(errorAuth);
        });
    } else if (originalRequest._retry) {
      // Logout the user
      Store.dispatch(SessionActions.reset());
    }

    return Promise.reject(error);
  },
);
