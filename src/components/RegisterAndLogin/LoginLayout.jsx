import React, { useState } from 'react'

const LoginLayout = () => {
    const [isLoginOpen,setIsLoginOpen] = useState(false)
    return (
        <div className='absolute right-0 top-0 w-1/3 bg-white shadow-lg h-full'>
        <p>close</p>
        Login
        </div>
  )
}

export default LoginLayout
