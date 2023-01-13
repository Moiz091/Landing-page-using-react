import React from 'react';
import { useState } from 'react';
import logo from '../images/logo.png'

function Navbar() {
    const [nav,setnav]= useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 50) {
            setnav(true);
        }
        else{
            setnav(false);
        }
    }
window.addEventListener('scroll', changeBackground);

  return (
<nav className={nav ? 'nav active' : 'nav'}>

    <a  className='logo'> 
    <img src={logo} alt=""></img>
    </a>
    <input type='checkbox' className='menu-btn' id='menu-btn'/>
    <label className='menu-icon'>
    <span className='nav-icon'></span>
    </label>
    <ul>
        <li><a href='#main' className='active'>Home</a></li>
        <li><a href='#features'>Features</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#presentaion'>Portfolio</a></li>
        <li><a href='#contact'>Contact</a></li> 
    </ul>
</nav>
  )
}

export default Navbar