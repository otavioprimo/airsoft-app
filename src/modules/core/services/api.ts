// import {Store} from '../store';
import AppConfig from '../configs/AppConfig';

interface UrlParams {
  version: number;
  action: string;
}

export function getUrl({version = 1, action}: UrlParams) {
  // Url da api em produção
  let baseUrl = 'airsoft-api.herokuapp.com';
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
// export const getAuthorizationHeaders = () => {
//   const state = Store.getState(); // Pega o token do reducer
//   if (state.session?.tokens) {
//     const {token} = state.session.tokens;
//     if (token) {
//       return {
//         Authorization: token,
//       };
//     }
//   }
// };
