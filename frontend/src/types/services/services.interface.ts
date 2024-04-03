export interface IEmailPassword {
  email: string
  password: string
}

export interface IAuthResponse {
  user: IUser
  token: string
}

export interface IUser {
  nickname: string
  email: string
}
