// import {Store} from '../store';
import AppConfig from '../configs/AppConfig';
import {Store} from '../configs/store';

interface UrlParams {
  version: number;
  action: string;
}

export function getUrl({version = 1, action}: UrlParams) {
  // Url da api em produção
  let baseUrl = 'otavioprimo-airsoft-api.herokuapp.com';
  let protocol = 'https';

  if (AppConfig.TEST_LOCALHOST) {
    protocol = 'http';
    baseUrl = `${AppConfig.TEST_LOCALHOST_IP}:${AppConfig.TEST_LOCALHOST_PORT}`;
  }

  return `${protocol}://${baseUrl}/v${version}/${action}`;
}

/**
 * @description Pega o token de acesso a ser enviado no header
 * @returns Object - { Authorization: string }
 */
export const getAuthorizationHeaders = () => {
  const state = Store.getState(); // Pega o token do reducer
  if (state.session?.token) {
    const {token} = state.session;
    if (token) {
      return {
        Authorization: token,
      };
    }
  }
};

export const sanitalizeApiError = (error: any): string => {
  if (error?.response?.status === 400 || error?.response?.status === 404) {
    return error.response.data.message;
  }

  if (error?.response?.data?.errors && typeof error.response.data.errors === 'object') {
    const errors: any[] = error.response.data.errors;
    const message = errors.reduce((previus, current) => {
      return `${previus.msg} \n\n ${current.msg}`
    })

    return message;
   }

  return 'Não foi possível realizar esta ação';
};
