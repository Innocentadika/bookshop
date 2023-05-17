import React, { Fragment } from 'react'
import Footer from '../../hero/Footer/Footer';
import { Typewriter } from 'react-simple-typewriter';
import Mbale from '../../assets/Logo.png'
import './loarder.css'
import Accounts from '../Accounts/Accounts';
import Navbar from '../../hero/navbar/Navbar';
import WhatsAppButton from '../../hero/whatsapp/WhatsApp';
import Vincent from '../Vincent/Vincent';

const Loarder = () => {
  return (
    <Fragment>
<Navbar/>
    <div className=' justify-center items-center pt-8'>
     <div className='items-center justify-center py-16 sm:px-56 px-24 xl:px-96 xl:ml-44 md:ml-20'>
     <img style={{width: 200}} className=' rounded-l-full rounded-r-full ' src={Mbale} alt="unvailable at the momment please check your internet!" />
     </div>

    <div className='justify-center text-2xl text-center items-center'>
      <h1 style={{ paddingTop: '1rem', paddingBottom: '1rem', margin: 'auto 0', fontWeight: 'normal' }}>
        {' '}
        <span style={{ color: 'red', fontWeight: 'bold', fontFamily: 'sansf'}}>
          <Typewriter
            words={['Discover','Search', 'consult', 'Learn', 'Buy']}
            loop={100}
            cursor
            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            
          />
        </span>
        Bookpoint Mbale.
      </h1>
    </div>
    <Vincent/>
<Accounts />
        <div>
            <div className='italic text-center px-8 py-2'><h2>Welcome to BookPoint Mbale <span>&#128075;</span></h2></div>
        </div>

    <>
    <WhatsAppButton/>
    <Footer/>
    </>
    </div>

    </Fragment>
    
  )
}

export default Loarder;
