import React from 'react'
import './Header.css';
import Logo from '../../assets/logo.png'
export const Header = () => {
  return (
    <div className="header">
        <img src= {Logo} alt="Logo for gym" className='logo'/>

        <ul className='header-menu'>
            <li>Home</li>
            <li>Programes</li>
            <li>Why us</li>
            <li>Plans</li>
            <li>Testimonials</li>
        </ul>
    </div>
  )
}
