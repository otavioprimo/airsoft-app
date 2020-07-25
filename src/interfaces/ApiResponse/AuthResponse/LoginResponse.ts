import {IUser} from '../../User';

export default interface LoginResponse {
  message: string;
  token: string;
  refreshToken: string;
  data: IUser;
}
