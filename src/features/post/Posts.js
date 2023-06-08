import React from 'react'
import PostItem from './PostItem'
import { useDispatch } from 'react-redux'
import { getPosts } from './PostSlice'
import { useSelector } from 'react-redux'


const Posts = () => {
    const dispatch = useDispatch()

    const posts = useSelector((state)=> state.posts.post)
    return (
        <div>
            <button
                type='submit'
                className='bg-lime-300  hover:bg-lime-400 transition-all p-2 text-sm'
              onClick={()=> dispatch(getPosts())}
           >
                {posts?.map((post)=>(
            <PostItem 
            key={post.title}
            post={post}
            />

                ))}
            </button>
        </div>
    )
}

export default Posts