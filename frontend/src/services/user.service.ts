import { instance } from "@/api/api.interceptor";
import { IUser } from "@/types/user/user.interface";

const PATH = 'users';

export const UserService = {

    async getProfile() {
        return instance<IUser>({
            url: `/${PATH}/profile`,
            method: 'GET',
        })
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
};