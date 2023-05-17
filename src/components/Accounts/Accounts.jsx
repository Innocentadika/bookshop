import React from 'react'
import { Link } from 'react-router-dom'

const Accounts = () => {
  return (
    <div className=' lg:px-14 sm:px-2 '>
    <div className='p-1 lg:p-5  bg-black sm:rounded-lg'>
    <div className='rounded justify-between flex space-x-2'>
      <form action="" method="post">

      <div className='text-center text-white sm:px-28  sm:text-base lg:px-64 lg:text-xl space-y-1'>
            <p className='font-bold text-red-600 sm:py-2'>Subcribe</p>
            <input className='rounded pb-2 text-zinc-700 p-1 w- lg:w-64 bg-slate-200 h-8 ' type="email" name="" id="" placeholder='Enter your email here.' /><br />
            <button className='bg-black px-2 font-serif  rounded-lg' type="submit">Submit</button>

        </div>

      </form>

        <div className='text-center text-white p-2 sm:px-6 lg:px-20 lg:text-xl'>
        <button className='border bg-black px-2 font-serif  rounded-lg decoration-white'><Link to='/contacts'>Contact Us</Link></button>
        </div>
      
    </div>
    </div>
    </div>
  )
}

export default Accounts;
