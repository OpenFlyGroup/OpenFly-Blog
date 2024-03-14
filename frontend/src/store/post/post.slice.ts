import { createSlice } from '@reduxjs/toolkit'
import { IPost } from '@/store/post/post.interface'
import {
  fetchAllPosts,
  fetchPostById,
  createNewPost,
  updateExistingPost,
  deletePost,
  leaveComment,
} from './post.actions'

interface PostState {
  posts: IPost[]
  status: 'idle' | 'loading' | 'succeeded' | 'failed'
  error: string | undefined
}

const initialState: PostState = {
  posts: [],
  status: 'idle',
  error: '',
}

export const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllPosts.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchAllPosts.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.posts = action.payload
      })
      .addCase(fetchAllPosts.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
      .addCase(fetchPostById.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchPostById.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.posts.push(action.payload)
      })
      .addCase(fetchPostById.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
      .addCase(createNewPost.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(createNewPost.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.posts.push(action.payload)
      })
      .addCase(createNewPost.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
      .addCase(updateExistingPost.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(updateExistingPost.fulfilled, (state, action) => {
        state.status = 'succeeded'
        const index = state.posts.findIndex(
          (post) => post.id === action.payload.id
        )
        if (index !== -1) {
          state.posts[index] = action.payload
        }
      })
      .addCase(updateExistingPost.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
      .addCase(deletePost.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.posts = state.posts.filter((post) => post.id !== action.meta.arg)
      })
      .addCase(deletePost.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
      .addCase(leaveComment.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(leaveComment.fulfilled, (state, action) => {
        state.status = 'succeeded'
        const index = state.posts.findIndex(
          (post) => post.id === action.payload.id
        )
        if (index !== -1) {
          state.posts[index] = action.payload
        }
      })
      .addCase(leaveComment.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  },
})
