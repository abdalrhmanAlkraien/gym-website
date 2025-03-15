import React, { useState } from 'react'
import './Testimonial.css'
import {testimonialsData} from '../../data/testimonialsData'
import rightArrow from '../../assets/rightArrow.png'
import leftArrow from '../../assets/leftArrow.png'

const Testimonial = () => {
  const [selected, setSelected] = useState(0);
  const tLength = testimonialsData.length;
  return (
    <div className="testimonial">
        <div className="left-test">
            <span>Testimoinal</span>
            <span className='storck-text'>What they</span>
            <span>say about us</span>
            
            <div className='review'>
                <span>{testimonialsData[selected].review}</span>
                <div className='identity'>
                <span>{testimonialsData[selected].name}</span> 
                <span> - {testimonialsData[selected].status}</span>
                </div>
            </div>
        </div>

        <div className="right-test">
          <div></div>
          <div></div>
            <img src={testimonialsData[selected].image} alt="" />    

            <div className='arrow'>
              <img onClick={()=> {
                selected === 0 ? 
                setSelected(tLength -1): setSelected((prev)=> prev -1 )
              }}
              
              src={leftArrow} alt=""  />
              <img 
              onClick={()=> {

                selected === tLength - 1 ?
                setSelected(0) : setSelected((prev)=> prev +1 )
              }}
              src={rightArrow} alt="" />
            </div>
        </div>
    

    </div>
  )
}

export default Testimonial
