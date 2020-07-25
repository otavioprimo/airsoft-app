import {IUser} from '~/interfaces/User';
import {ImmutableObject} from 'seamless-immutable';
import {Action} from 'redux';

interface State {
  token: string | null;
  refreshToken: string | null;
  user: IUser | null;
}

export interface SessionState extends ImmutableObject<State> {}

export interface SessionActionTypes {
  SET_USER: string;
  SET_TOKENS: string;
  RESET: string;
}

export interface SetUser extends Action<SessionActionTypes> {
  user: IUser;
}

export interface SetTokens extends Action<SessionActionTypes> {
  token: string;
  refreshToken: string;
}

export interface Reset extends Action<SessionActionTypes> {}

export interface SessionCreatorsTypes {
  setUser(user: IUser): SetUser;
  setTokens(token: string, refreshToken: string): SetTokens;
  reset(): Reset;
}

export type SessionReducerTypes = SetUser & SetTokens & Reset;
