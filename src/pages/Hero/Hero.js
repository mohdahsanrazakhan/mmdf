import React from 'react'
import './Hero.css'
import { motion } from "framer-motion"

function Hero() {
  return (
    <motion.div 
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1.5 }}
    className='hero-portion'>
      <div className="hero-title">
        <p><div id='dash'></div>make me debt free</p>
        <h1>“debts solution”</h1>
        <h2>best debt reliving</h2>
        <h2>solution and service</h2>
      </div>
    </motion.div>
  )
}

export default Hero