import { instance } from '@/api/api.interceptor'
import { IUser } from '@/types/user/user.interface'
import { use } from 'react'
import { IAuthResponse } from '@/store/user/user.interface'
import { getContentType } from '@/api/api.helper'
import Cookies from 'js-cookie'
import axios from 'axios'

const PATH = 'users'

export const UserService = {
  async getProfile() {
    const accessToken = Cookies.get('accessToken')
    const response = await axios.post<string, { data: IAuthResponse }>(
      `${process.env.SERVER_URL}/${PATH}/profile`,
      { accessToken },
      { headers: getContentType() }
    )
    return response
  },

  async updateProfile(data: IUser) {
    return instance<IUser>({
      url: `/${PATH}/profile`,
      method: 'PUT',
      data,
    })
  },

  async toggleLike(id: string | number) {
    return instance<IUser>({
      url: `/${PATH}/profile/likes/${id}`,
      method: 'PATCH',
    })
  },
}
