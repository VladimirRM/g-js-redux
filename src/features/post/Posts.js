import React from 'react'
import PostItem from './PostItem'
import {useDispatch,useSelector}  from 'react-redux'

const Posts = () => {

  const dispatch = useDispatch()

  const posts = useSelector((state)=> state.post.posts)
    return (
        <div>
            <button
                type='submit'
                className='bg-lime-300  hover:bg-lime-400 transition-all p-2 text-sm'
            >
                Get posts
            </button>
            <PostItem />
        </div>
    )
}

export default Posts