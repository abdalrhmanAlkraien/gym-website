import React from 'react'
import './Plan.css'
import {plansData} from '../../data/plansData'
import whiteTick from '../../assets/whiteTick.png'
export const Plan = () => {
  return (
    <div className="plan-container">
        
    <div className="plan-header">
        <span className='storck-text'>Ready to Start </span>
        <span>Your Journey </span>
        <span className='storck-text'>now withus</span>
    </div>


    <div className="plans-card">
    <div className="blur blur-plan-1"></div>
    <div className="blur blur-plan-2"></div>
        {plansData.map((plan,i)=> (
            <div className="plan" key={i}>
                {plan.icon}
                <span>{plan.name}</span>
                <span>${plan.price}</span>
                
                {plan.features.map((feature, i)=> (
                    <div className="feat">
                        <img src={whiteTick} alt="" />
                        <span>{feature}</span>
                    </div>
                ))}
                
                <span>see more benefits -></span>

                <buttons className="btn">Join Now</buttons>
            </div>
        ))}
    </div>
    </div>
  )
}
