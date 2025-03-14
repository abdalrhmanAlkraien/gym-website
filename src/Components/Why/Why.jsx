
import React from 'react'
import './Why.css'
import tick from "../../assets/tick.png"
import img1 from "../../assets/image1.png"
import img2 from "../../assets/image2.png"
import img3 from "../../assets/image3.png"
import img4 from "../../assets/image4.png"

import adidas from "../../assets/adidas.png"
import nb from "../../assets/nb.png"
import nike from "../../assets/nike.png"


export const Why = () => {
  return (
    
    <div className="why_us">
        
        <div className='left'>
          
          <img src= {img1} alt="" />
          <div className="img-box">

          <img src= {img2} alt="" />
          
          <div>
          <img src= {img3} alt="" />
          <img src= {img4} alt="" />

          </div>
          </div>
        </div>

        <div className='right'>
          <span className="reasons">some reasons</span> 

          <div className="reasons-header">
            <span className='storck-text'>Why </span>
            <span>choose us?</span>

            <div className='reasons-info'>
              <div>
                <img src={tick} alt="" className='tick-img'/>
                <span>over 140+ expert coachs</span>
              </div>
            
              <div>
                <img src={tick} alt="" className='tick-img'/>
                <span>train smarter and faster than before</span>
              </div>

              <div>
                <img src={tick} alt="" className='tick-img'/>
                <span>1 free program for new member</span>
              </div>

              <div>
                <img src={tick} alt="" className='tick-img'/>
                <span>reliable partners</span>
              </div>
            </div>
            <div className="our-partner">

              <span>OUR PARTNERS</span>
              <div className='partner-img'>
                <img src={nb} alt="" />
                <img src={adidas} alt="" />
                <img src={nike} alt="" />
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}
