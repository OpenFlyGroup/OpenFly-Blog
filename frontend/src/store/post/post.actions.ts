import { createAsyncThunk } from "@reduxjs/toolkit";
import { IPost } from "@/store/post/post.interface";
import { IDataFilters } from "@/services/news/news.interface";
import { NewsService } from "@/services/news/news.service";

export const fetchAllPosts = createAsyncThunk<IPost[], IDataFilters>(
  "posts/fetchAllPosts",
  async (queryData) => {
    const response = await NewsService.getAll(queryData);
    return response.data;
  },
);

export const fetchPostById = createAsyncThunk<IPost, string | number>(
  "posts/fetchPostById",
  async (id) => {
    const response = await NewsService.getById(id);
    return response.data;
  },
);

export const createNewPost = createAsyncThunk<IPost, void>(
  "posts/createNewPost",
  async () => {
    const response = await NewsService.create();
    return response.data;
  },
);

export const updateExistingPost = createAsyncThunk<
  IPost,
  { id: string | number; data: IPost }
>("posts/updateExistingPost", async ({ id, data }) => {
  const response = await NewsService.update(id, data);
  return response.data;
});

export const deletePost = createAsyncThunk<void, string | number>(
  "posts/deletePost",
  async (id) => {
    await NewsService.delete(id);
  },
);

export const leaveComment = createAsyncThunk<
  IPost,
  { id: string | number; commentText: string }
>("posts/leaveComment", async ({ id, commentText }) => {
  const response = await NewsService.leaveComment(id, commentText);
  return response.data;
});
