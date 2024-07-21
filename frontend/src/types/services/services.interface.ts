export interface IUser {
  nickname: string
  email: string
  role: string
}

export interface IToken {
  token: string
}

export interface IAuthResponse extends IToken {
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
