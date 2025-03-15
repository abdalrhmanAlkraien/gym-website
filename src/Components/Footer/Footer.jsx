import React from 'react'
import './Footer.css'
import github from "../../assets/github.png"
import insta from "../../assets/instagram.png"
import linkedin from "../../assets/linkedin.png"
import logo from "../../assets/logo.png"

const Footer = () => {
  return (
    <div className="footer-container">
        <hr />
        <div className="blur blur-footer-1"></div>
        <div className="blur blur-footer-2"></div>

        <div className="social-media">
            <img src= {github} alt="" />
            <img src= {insta} alt="" />
            <img src={linkedin} alt="" />
        </div>


        <div className="logo-f">
            <img src={logo} alt="" />
        </div>
    </div>
  )
}

export default Footer
