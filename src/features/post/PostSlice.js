import {createSlice, createAsyncThunk}  from '@reduxjs/toolkit'


 const initialState = {
    posts:[],
 }

 export const getPosts =  createAsyncThunk(
    'posts/getPosts', async (_,{rejectedWithValue,dispatch})=>{
        const res = await axios.get('')
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




