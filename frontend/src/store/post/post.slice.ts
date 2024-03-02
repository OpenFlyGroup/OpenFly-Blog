import { createSlice } from "@reduxjs/toolkit";
import { IPost } from "@/store/post/post.interface";
import {
  fetchAllPosts,
  fetchPostById,
  createNewPost,
  updateExistingPost,
  deletePost,
  leaveComment,
} from "./post.actions";

interface PostState {
  entities: { [key: string]: IPost };
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: PostState = {
  entities: {},
  status: "idle",
  error: null,
};

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllPosts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllPosts.fulfilled, (state, action) => {
        state.status = "succeeded";
        action.payload.forEach((post: IPost) => {
          state.entities[post.id] = post;
        });
      })
      .addCase(fetchAllPosts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "Failed to fetch posts";
      })
      .addCase(fetchPostById.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPostById.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.entities[action.payload.id] = action.payload;
      })
      .addCase(fetchPostById.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "Failed to fetch post";
      })
      .addCase(createNewPost.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createNewPost.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.entities[action.payload.id] = action.payload;
      })
      .addCase(createNewPost.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "Failed to create post";
      })
      .addCase(updateExistingPost.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateExistingPost.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.entities[action.payload.id] = action.payload;
      })
      .addCase(updateExistingPost.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "Failed to update post";
      })
      .addCase(deletePost.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deletePost.fulfilled, (state) => {
        state.status = "succeeded";
      })
      .addCase(deletePost.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "Failed to delete post";
      })
      .addCase(leaveComment.pending, (state) => {
        state.status = "loading";
      })
      .addCase(leaveComment.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.entities[action.payload.id] = action.payload;
      })
      .addCase(leaveComment.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "Failed to leave comment";
      });
  },
});
