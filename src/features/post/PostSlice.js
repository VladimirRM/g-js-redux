// https://jsonplaceholder.typicode.com/posts

import {createSlice,createAsyncThunk}   from "@reduxjs/toolkit"
import axios from "axios"


const initialState = {
    posts: [],
}

export const deletedPostById = createAsyncThunk(
    "posts/deletePostById",async (id,{rejectWithValue,dispatch})=>{
          await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
          dispatch(deletePost(id))
    }
)

export const getPosts = createAsyncThunk(
    'posts/getPosts',async (_,{rejectWithValue,dispatch}) => {
          const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
          dispatch(setPosts(res.data))
    }
)



export const postSlice = createSlice({
    name:'posts',
    initialState,
    reducers:{
        setPosts:(state,action)=>
            {state.posts = action.payload
            },
            deletePost:(state,action)=> {
                state.posts = state.posts.filter((post)=> post.id !==action.payload)
            }
        },
})

export const {setPosts} = postSlice.actions
export default postSlice.reducer