import {createSlice, createAsyncThunk}  from '@reduxjs/toolkit'
import axios from 'axios'


 const initialState = {
    posts:[],
 }

export const getPosts = createAsyncThunk(
    'post/getPosts',   async (_,{rejectedWithValue,dispatch})=>{
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
      dispatch(setPosts(res.data))
    }
)


 export const postSlice = createSlice({
    name:'post',
    initialState,
    reducers:{
        setPosts:(state,action)=>{
            state.posts = action.payload
        }
    }
 })

 export const {setPosts}  = postSlice.actions
export default postSlice.reducer 




