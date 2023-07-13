import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";



const initialState = {
  posts:[],
}

export const getPosts = createAsyncThunk(
  'posts/getPosts', async (_,{rejectWithValue,dispatch}) =>{
       const res = await axios.get()
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
export const {setPosts}= postSlice.reducer
export default postSlice.reducer