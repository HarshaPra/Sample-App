import React from 'react'
import Navib from '../components/Navib';
import HeroSec from '../hero sec/HeroSec';
import gallary from '../images/gallary.jpg';




const Gallary = () => {
  return (
    <div>
      <Navib/>
      <HeroSec
          cName='hero-sub'
          mask='mask-sub'
          img='image-sub'
          image={gallary}
          mainTitle='Gallary'
          
    />
    
    </div>
  )
}

export default Gallary