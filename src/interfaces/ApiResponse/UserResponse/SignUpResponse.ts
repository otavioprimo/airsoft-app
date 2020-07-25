import {IUser} from '~/interfaces/User';

export default interface SignUpResponse {
  message: string;
  token: string;
  refreshToken: string;
  data: IUser;
}
