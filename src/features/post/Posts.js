import React from 'react'
import PostItem from './PostItem'
import {useSelector,useDispatch}   from 'react-redux'
import { getPosts } from './PostSlice'

const Posts = () => {

    const dispatch = useDispatch()

    const posts = useSelector((state)=>state.post.posts)


    return (
        <div>
            <button
                type='submit'
                className='bg-lime-300  hover:bg-lime-400 transition-all p-2 text-sm'
              onClick={()=> dispatch(getPosts())}
           >
                Get posts
            </button>
            {posts?.map((post)=>(
            <PostItem 
            key={post.title}
            post={post}
            />

            ))}
        </div>
    )
}

export default Posts