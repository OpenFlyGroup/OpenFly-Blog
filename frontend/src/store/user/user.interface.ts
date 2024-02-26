import { IUser } from "@/types/user/user.interface";

export interface IUserState {
  nickname: string;
  email: string;
  isAdmin: boolean;
}

export interface ITokens {
  accessToken: string;
  refreshToken: string;
}

export interface IEmailPassword {
  email: string;
  password: string;
}

export interface IAuthResponse extends ITokens {
  user: IUser;
}

export interface IInitialState {
  user: IUserState | null;
  isLoading: boolean;
}
