import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'


const WhatsAppButton = () => {
    
    const handleClick = () => {
        const encodedMessage = encodeURIComponent('Thank you for reaching out, Mbale bookpoint. How may we assist you?');
        const waUrl = `https://wa.me/${254704437165}?text=${encodedMessage}`;
        window.open(waUrl);
    };
  return (
    <>
    <div>
        <div>

        </div>
        
    <button onClick={handleClick} className=' text-green-600 z-50 bottom-1 right-1 fixed'><FaWhatsapp size={40} class='ml-2 tex '/></button>
    
      </div>
    </>
  )
}

export default WhatsAppButton
