import { instance } from "@/api/api.interceptor";
import { IPost } from "@/lib/post/post.interface";
import { IDataFilters } from "./news.interface";

const PATH = 'news';

export const NewsService = {

    async getAll(queryData = {} as IDataFilters) {
        return instance<IPost[]>({
            url: `/${PATH}/`,
            method: 'GET',
            params: queryData,
        })
    },

    async getById(id: string | number) {
        return instance<IPost[]>({
            url: `/${PATH}/post/${id}`,
            method: 'GET',
        })
    },

    async create() {
        return instance<IPost[]>({
            url: `/${PATH}/post-create`,
            method: 'POST',
        })
    },

    async update(id: string | number, data: IPost) {
        return instance<IPost[]>({
            url: `/${PATH}/post/${id}`,
            method: 'PUT',
            data,
        })
    },

    async delete(id: string | number) {
        return instance<IPost[]>({
            url: `/${PATH}/post/${id}`,
            method: 'DELETE',
        })
    },

    async leaveComment(id: string | number, data: string) {
        return instance<IPost[]>({
            url: `/${PATH}/post/${id}`,
            method: 'POST',
            data,
        })
    }
};