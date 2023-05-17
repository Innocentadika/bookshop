import React from 'react'
import {HiOutlineArrowNarrowRight} from 'react-icons/hi'
import Profile from '../../assets/vincent.png'

const Vincent = () => {
  return (
    <div>
    <div className='lg:p-24 sm:p-6 p-2 '>
        <h1 className='text-center text-2xl font-black italic py-4'>Why Us?</h1>

      <div className='sm:flex sm:space-x-5 max-sm:space-y-3 lg:space-x-10'>
        <div style={{backgroundColor: 'black'}} className=' sm:py-6 text-left rounded-lg text-white lg:px-20 p-1'>
            <p>
            Bookpoint, where the magic of literature comes alive! Our shelves are filled with stories that will transport you to different worlds, introduce you to new characters and ideas, and inspire your imagination.
            </p>
        </div>
        <div>
            <img className=' rounded-lg' src={Profile} alt="File unavailable, please check your network and try again." />
        </div>
      </div>
      
      
    </div>
    
       <div className=' text-center font-black space-y-10 py-20 '>
            <h1 className='text-2xl italic'>Comments And Team Support.</h1>
            <div className='space-y-3'>
            <p className='support'><a className='flex justify-center' href="http:/testimonies">SEE OUR CLIENTS<span className='flex items-center ml-1 text-2xl'><HiOutlineArrowNarrowRight/></span></a></p>
            <p className='support'><a className='flex justify-center' href="http:/completed projects">SEE OUR PUBLISHERS<span className='flex items-center ml-1 text-2xl'><HiOutlineArrowNarrowRight/></span></a></p>
            </div>
          </div>
    </div>
  )
}

export default Vincent;
