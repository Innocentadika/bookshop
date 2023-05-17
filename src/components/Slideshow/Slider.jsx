import React from 'react'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import dataSlider from './dataSlider';
import Navbar from '../../Hero/navbar/Navbar';

const Slider = () => {
  return (
    <div className=''>
      
      <>
      <Navbar/>
      </>
        <Slide>
        {dataSlider.map((Slider, index) => (
         <div key={index}>
            <div className='text-center md:py-64 sm:py-64 lg:py-80 py-40 ' style={{width: '100%', backgroundImage:`url(${Slider.project})`, backgroundSize: 'cover', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat'}}/>
         
        
         </div>
        ))}

      </Slide>
    </div>
  )
}

export default Slider;
