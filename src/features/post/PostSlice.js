// https://jsonplaceholder.typicode.com/posts


import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";


const initialState = {
    posts: [],

}

export const getPosts = createAsyncThunk(
    "posts/getPosts",async(_,{rejectWithValue})=>{
          const res = await axios.get('')
    }
)


export const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers:{
        setPosts:()=>{
            state.posts = action.payload 
        }
    }
})

export const {setPosts}  = postSlice.actions
export default postSlice.reducer





