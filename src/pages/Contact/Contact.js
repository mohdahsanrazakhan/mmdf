import React from 'react'
import contactus from '../../assets/images/contactus.jpg'
import ContactForm from '../../components/Form/ContactForm'
import './Contact.css'

function Contact() {
  return (
    <div className='container contact-us'>
      {/* Form Portion */}
      <div className='form-container'>
        <ContactForm />
      </div>
      {/* Image Portion */}
      <div className='image-container'>
        <img src={contactus} alt="contact form" />
      </div>
    </div>
  )
}

export default Contact