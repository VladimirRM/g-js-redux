import { createSlice,AsyncThunk, createAsyncThunk } from "@reduxjs/toolkit";


const initialState = {
  posts: [],
}

export const getPosts = createAsyncThunk(
  'posts/getPosts', (_,{rejectWithValue,dispatch})=>{
     
  }
)

export const postSlice = createSlice({
  name:'posts',
  initialState,
  reducers:{
    setPosts:(state,action)=>{
      state.posts = action.payload
    }
  }
})
export const {setPosts} = postSlice.actions
export default postSlice.reducer