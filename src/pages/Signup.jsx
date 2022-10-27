import React from 'react'
import Navib from '../components/Navib';
import HeroSec from '../hero sec/HeroSec';
import main from '../images/signup.jpg'



const Signup = () => {
  return (
    <div>
      <Navib/>
      <HeroSec
          cName='hero-sub'
          mask='mask-sub'
          img='image-sub'
          image={main}
          mainTitle='Signup'
          
    />
 
      
    </div>
  )
}

export default Signup