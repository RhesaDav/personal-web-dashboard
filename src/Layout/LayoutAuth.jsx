import React from 'react'
import Logo from '../assets/logo.svg'

export default function LayoutAuth({children}) {
  return (
    <div className=''>
      <div className='flex flex-col justify-center gap-5 items-center'>
      <div className="flex flex-col">
      <img src={Logo} alt="" className='h-20' />
      <h1>Sign In To Your Account</h1>
      </div>
      <div className='border w-3/6 rounded-2xl shadow-xl p-6'>
        <div className='flex flex-col'>
          <label>Email Address</label>
          <input type="text" className='border' />
        </div>
        <div className='flex flex-col'>
          <label>Email Address</label>
          <input type="text" className='border' />
        </div>
        <div className='flex justify-between'>
          <div className='flex items-center'>
          <input type="checkbox" name="" id="" />
          <h1>Remember me</h1>
          </div>
          <button>Forgot Your Password</button>
        </div>
      </div>
      </div>
    </div>
  )
}
