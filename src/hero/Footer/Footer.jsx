import React from 'react'
import {IoLocationOutline} from 'react-icons/io5'
import {
     FiFacebook,
     FiTwitter, 
     FiInstagram,
     FiPhoneCall,
     FiMail
    } from 'react-icons/fi'
import {BsLinkedin} from 'react-icons/bs'
import {TfiTumblr} from 'react-icons/tfi'
import './footer.css'
import logo from '../../assets/Logo.png'

const Footer = () => {
  return (
    <div className='footer text-white py-4 p-2' style={{backgroundColor: 'rgb(3, 1, 1)'}}>
        
      <div className=' space-y-4'>
        <img src={logo} style={{width: 200,}} alt="Logo unavailable. Please check your connection!" />
        <div className='lg:flex lg:space-x-1 max-w-fit justify-evenly'>
            <div className='flex space-x-1'>
            <a className='rotate' href="http:/">Home</a>
            <span>|</span>
            <a className='rotate' href="http:/aboutUs">About</a>
            <span>|</span>
            <a className='rotate' href="http:/services">Service</a>
            <span>|</span>
            <a className='rotate' href="http:/privacy">Privacy</a>
            <span>|</span>
            <a className='rotate' href="http:/articles">Publishers</a>
            <span>|</span>
            </div>

            <div className='flex space-x-1'>
            
            <a className='rotate'  href="http:/contacts">Contacts</a>
            <span>|</span>
            <a className='rotate'  href="http:/resources">Resources</a>
            </div>
            

        </div>

        <div className='text-left'>
            BookPoint©2023
        </div>
        
      </div>

      <div className=' space-y-4'>

        <div className=' text-left flex space-x-3'>
        <IoLocationOutline className='bg-zinc-600 rounded-full p-1 text-white'  size={30} />
        <div>
        <p>Marketroad off poster bank</p>
        <p>Vihiga,Kenya</p>
        </div>
        </div>

        <div className=' flex space-x-3'>
        <FiPhoneCall className='bg-zinc-600 rounded-full p-1 text-white'  size={30} />
        <a href="tel:+254741564870">+254704437165</a>
        </div>

        <div className=' flex space-x-3'>
        <FiMail className='bg-zinc-600 rounded-full p-1 text-white' size={30} />
        <a className='text-blue-500 ' href="mailto:wambuiarchitec@gmail.com">bookpointcyber@gmail.com</a>
        </div>
      </div>

      <div className=' w-auto space-y-4'>
        <h1 className=' text-lg font-bold text-slate-400'>About the company</h1>
        <p className=' text-left'>Bookpoint, where the magic of literature comes alive! Our shelves are filled with stories that will transport you to different worlds, introduce you to new characters and ideas, and inspire your imagination..</p>

        <div className='flex space-x-3 '>
<FiFacebook className=' hover:text-slate-600' size={28} />
<FiTwitter className=' hover:text-slate-600' size={28} />
<BsLinkedin className=' hover:text-slate-600' size={28} />
<FiInstagram className=' hover:text-slate-600' size={28} />
<TfiTumblr className=' hover:text-slate-600' size={28} />
                </div>

      </div>

    </div>
  )
}

export default Footer;
