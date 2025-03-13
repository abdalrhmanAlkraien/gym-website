import React from 'react'
import './Programs.css'
import dumbell from "../../assets/dumbell.png"

export const Programs = () => {
  return (
    
    <div className="program">
        <div className='program-header'>
            <span className='storck-text'>Explore our </span>
            <span>Programs </span>
            <span className='storck-text'>To shape you </span>        
        </div>
        
        <div className="program-info">

            <div className="info">

                <img src={dumbell} alt="dumbell" />
                <span>Strength Training</span>
                <p>In this program, you are trained to improve your strength through many exercises.</p>
                <buttons className="btn">Join Now</buttons>
            </div>

            <div className="info">

                <img src={dumbell} alt="dumbell" />
                <span>Strength Training</span>
                <p>In this program, you are trained to improve your strength through many exercises.</p>
                <buttons className="btn">Join Now</buttons>
            </div>

            <div className="info">

                <img src={dumbell} alt="dumbell" />
                <span>Strength Training</span>
                <p>In this program, you are trained to improve your strength through many exercises.</p>
                <buttons className="btn">Join Now</buttons>
            </div>

            <div className="info">

                <img src={dumbell} alt="dumbell" />
                <span>Strength Training</span>
                <p>In this program, you are trained to improve your strength through many exercises.</p>
                <buttons className="btn">Join Now</buttons>
            </div>
        </div>
    </div>
  )
}
