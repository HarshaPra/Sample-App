import React from 'react'
import './Home.css'
import Navib from '../components/Navib';
import HeroSec from '../hero sec/HeroSec';
import trimg from '../images/trimg.jpg';





export default function Home() {
  return (
   <body>
    <div className='home'>
    <Navib/>
    <HeroSec
        cName='hero'
        mask='mask'
        img='image'
        image={trimg}
        mainTitle='Your travel Manager'
        paragraf='Subscribe to Our latest Updates'
        
    />
    </div>
  
    
    </body>
  )
}
