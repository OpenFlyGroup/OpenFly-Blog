export interface IUser {
  nickname: string
  email: string
  role: string
}

export interface ITokens {
  accessToken: string
  refreshToken: string
}

export interface IAuthResponse extends ITokens {
  user: IUser
}

export interface IEmailPassword {
  email: string
  password: string
}

export interface IInitialState {
  user: IUser
  isLoading: boolean
}
