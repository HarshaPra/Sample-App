import React from 'react'
import Navib from '../components/Navib';
import HeroSec from '../hero sec/HeroSec';
import contact from '../images/contact.jpg';




const Contact = () => {
  return (
    <div class='Contact'>
      <Navib/>
      <HeroSec
          cName='hero-sub'
          mask='mask-sub'
          img='image-sub'
          image={contact}
          mainTitle='contact'
          
    />
    
    </div>

  )
}

export default Contact