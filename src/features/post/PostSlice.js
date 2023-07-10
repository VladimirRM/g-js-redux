import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";



const initialState = { 
  posts: [],
}

export const postSlice  = createSlice({
  name:"posts",
  initialState,
  reducers:{
    setPosts:(state,action)=>{
      state.posts = action.payload
    },
    deletePost:(state,action)=>{
      state.posts = state.posts.filter((post)=> post.id !==action.payload)
    }
  }
})

export const {setPosts}  = postSlice.actions
export default postSlice.reducer