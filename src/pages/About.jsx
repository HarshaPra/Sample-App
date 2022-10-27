import React from 'react'
import Navib from '../components/Navib';
import HeroSec from '../hero sec/HeroSec';
import main from '../images/main.jpg'


function About() {
  return (

    <div class='About'>
      <Navib />
      <HeroSec
          cName='hero-sub'
          mask='mask-sub'
          img='image-sub'
          image={main}
          mainTitle='About Us'
          
    />
          <p>Travel for free is a website targeting all tourist areas of Lanka.<br/>
            Online booking facilities enable you to deal with hotels and travel agencies with clients and reservations<br/>
            that suit your budget very easily and also allow you to make reliable payments.
            Provides you with valuable services to discover tourist areas in Lanka, share ideas with others and more. <br/>
            Register for free. Enjoy your vacation..<br/>
          </p>

    </div>
  );
}

export default About
