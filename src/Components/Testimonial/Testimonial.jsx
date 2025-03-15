import React, { useState } from 'react'
import './Testimonial.css'
import {testimonialsData} from '../../data/testimonialsData'
import rightArrow from '../../assets/rightArrow.png'
import leftArrow from '../../assets/leftArrow.png'
import { motion } from "framer-motion";

const Testimonial = () => {
  const [selected, setSelected] = useState(0);
  const tLength = testimonialsData.length;
  const transition = {type: 'spring', duration: 3}

  return (
    <div className="testimonial">
        <div className="left-test">
            <span>Testimoinal</span>
            <span className='storck-text'>What they</span>
            <span>say about us</span>
            
            <div className='review'>
                <motion.span
                key={selected}
                                transition={transition}
                                initial={{opacity: 0, x: -100}}
                                animate={{opacity: 1, x: 0}}
                                exit={{opacity: 0, x: 100}}
                                transition={transition}

                >{testimonialsData[selected].review}</motion.span>

                <div className='identity'>
                <span>{testimonialsData[selected].name}</span> 
                <span> - {testimonialsData[selected].status}</span>
                </div>
            </div>
        </div>

        <div className="right-test">
          <motion.div
          transition={transition}
          initial={{opacity: 0, x: -100}}
          whileInView={{opacity: 1, x: 0}}
          ></motion.div>
          <motion.div
          transition={{...transition, duration: 2}}
          initial={{opacity: 0, x: 100}}
          whileInView={{opacity: 1, x: 0}}
          ></motion.div>
          <motion.img 
          key={selected}
          transition={transition}
          initial={{opacity: 0, x: 50}}
          animate={{opacity: 1, x: 0}}
          exit={{opacity: 0, x: -100}}
          transition={transition}
          src={testimonialsData[selected].image} alt="" />    

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
