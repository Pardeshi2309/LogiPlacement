import React from 'react'

const Signup = () => {
  return (
    <div className=' h-[calc(100vh-50px)] flex items-center justify-center'>
      <div className='flex flex-col h-[450px] w-[370px] items-center justify-center border shadow-2xl shadow-green-500 bg-black rounded-xl'>
        <h1 className='text-white font-bold text-[30px] mb-18'>Registration</h1>
        <input className='w-[270px] h-[35px] m-3 rounded-lg' type='name' placeholder='User name' />
        <input type="email" className='w-[270px] h-[35px] m-3 rounded-lg' placeholder='Email' />
        <input className='w-[270px] h-[35px] m-3 rounded-lg ' type="password" placeholder="Password" />
        <button className='text-white font-bold rounded-lg text-lg bg-black hover:text-green-500 m-3 flex items-center justify-center'>Sign up</button>
      </div>
    </div>
  )
}

export default Signup