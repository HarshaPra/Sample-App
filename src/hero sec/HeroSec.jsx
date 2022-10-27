import React from 'react'
import '../hero sec/HeroSec.css';
import trimg from '../images/trimg.jpg';


const HeroSec = (props) => {
  return (
    <div className={props.cName}>
        <div className={props.mask}>
            <img className={props.img} src={props.image} alt='travel,main,srilanka'/>
        </div>

        <div className='maintext'>
          <h1>{props.mainTitle}</h1>
          <p>{props.paragraf}</p>
        </div>

        <div className='mail'>
            <input className='type' type='text' placeholder='Enter Your Email'/>
            <button className='btn'>Subscribe</button>
            
            
        </div>
    </div>
  )
}

export default HeroSec