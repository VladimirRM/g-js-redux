import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";



const initialState = { 
  posts: [],
}

export const getPosts = createAsyncThunk(
  'posts/getPosts', async (_,{rejectWithValue,dispatch})=>{
      const res = axios.get()
  }
)

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