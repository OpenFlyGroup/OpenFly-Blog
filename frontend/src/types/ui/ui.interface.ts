import { IUserState } from '@/store/user/user.interface'
export interface ICheckUserProps {
  user: IUserState | null
}

export interface IBtnSubmitProps {
  text: string
}
