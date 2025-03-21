import React from 'react'
import './Hero.css'
import { Header } from '../Header/Header'
import hero_image from '../../assets/hero_image.png'
import hero_back from "../../assets/hero_image_back.png"
import heart from "../../assets/heart.png"
import calories from "../../assets/calories.png"
import { motion } from "framer-motion";

const Hero = () => {
    const transition = {type: 'spring', duration: 3}
  return (
    <div className="hero">
        <div className="blur blur-h"></div>
        <div className="left-h">
            <Header/>
            <div className="the-best-ad">
                <motion.div
                initial= {{left: '238px'}}
                whileInView={{left: '8px'}}
                transition={{...transition, type: 'tween'}}/>


                <span> The best fintness club in the town.</span>
            </div>

            <div className="hero-text">
                <div>
                    <span className='storck-text'>Shape </span>
                    <span>Your</span>
                </div>

                <div>
                    <span>Ideal Body</span>
                </div>

                <div>
                    <span> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</span>
                </div>
            </div>

            <div className="figures">
                <div>
                    <span>+140</span>
                    <span>expert coaches</span>
                </div>

                <div>
                    <span>+968</span>
                    <span>members joined</span>
                </div>
                <div>
                    <span>+50</span>
                    <span>fintness programs</span>
                </div>
            </div>

            <div className="hero-button">
                <buttons className='btn'>Get started</buttons>
                <buttons className='btn'>Learn More</buttons>
            </div>
        </div>
        <div className="right-h">

            <buttons className= "btn">Join Now</buttons>
            
            <motion.div 
                transition={transition}
                initial={{right: '-1rem'}}
                whileInView={{right: '4rem'}}
            className="heart-rate">
                <img src={heart} alt="Heart image" />
                <span>Heart Rate</span>
                <span>116 Bpm</span>
            </motion.div>

            <img src={hero_image} alt="hero image" className='hero-image'/>
            <motion.img 
                            transition={transition}
                            initial={{right: '37rem'}}
                            whileInView={{right: '28rem'}}
            src={hero_back} alt="hero back" className='back-hero-image'/>
            <motion.div 
                transition={transition}
                initial={{right: '37rem'}}
                whileInView={{right: '28rem'}}
            className='calories'>
                <img src= {calories} alt="calories" />
                <div>
                    <span>Calories burned</span>
                    <span>220 kcal</span>
                </div>
            </motion.div>
        </div>
    </div>
  )
}

export default Hero