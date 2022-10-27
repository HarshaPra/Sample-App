import React, { useState } from 'react'
import {Link, link} from 'react-router-dom';
import logo from '../images/logo.svg';
import '../components/Navib.css';
import {FaBars,FaTimes} from 'react-icons/fa';

function NavigationBar() {

  const [click,setClick]=useState(false);
  const handleClick = () => setClick(!click)

  return (
    <div class='mainBackground'>
        <div class='logo'>
           <Link to='/'>
            <img src={logo} width='80px'/>
            </Link>  
        </div>
        <nav class='menus'>
          <ul class={click ? "navMenu active" : "navMenu" }>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
             <Link to ='/About'>About</Link>
            </li>
            <li>
              <Link to='/Gallary'>Gallary</Link>
            </li>
            <li>
              <Link to='/Contact'>Contact</Link>
            </li>
            <li>
              <Link to='/Signup'>Signup</Link>
            </li>
          </ul>
        </nav>
        <div class='hamburgar'onClick={handleClick}>
          {click ? (<FaTimes size={30}/>):(<FaBars size={30}/>)}
        </div>

    </div>
  )
}

export default NavigationBar