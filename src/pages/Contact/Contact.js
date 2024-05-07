import React from 'react'
import contactus from '../../assets/images/contactus.jpg'
import ContactForm from '../../components/Form/ContactForm'
import './Contact.css'
import { motion } from "framer-motion"

function Contact() {
  return (
    <div className='contact-us'>
      {/* Form Portion */}
      <motion.div 
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.5 }}
      className='form-container'>
        <ContactForm />
      </motion.div>
      {/* Image Portion */}
      <motion.div 
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.5 }}
      className='image-container'>
        <img src={contactus} alt="contact form" />
      </motion.div>
    </div>
  )
}

export default Contact