import React from 'react'
import { useSelector } from 'react-redux'
// import firstName from "../features/user/userSlice"

const FirstName = () => {

    const name = useSelector((state)=>state.user.firstName)
    return <div className='font-bold'>{name}</div>
}

export default FirstName