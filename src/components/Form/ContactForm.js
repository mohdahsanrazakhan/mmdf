import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import './ContactForm.css'

function ContactForm() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, {
        publicKey: 'YOUR_PUBLIC_KEY',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className='contact-form'>
      <h2>Let's talk!</h2>
      <p>Go ahead and send us a brief of your requirements!</p>
      <form ref={form} onSubmit={sendEmail}>
        <div className='input-fields'>
          <label>Full name</label>
          <input type="text" name="user_name" placeholder='Type your name' required/>
        </div>
        <div className='input-fields'>
          <label>Email</label>
          <input type="email" name="user_email" placeholder='Type your email' required />
        </div>
        <div className='input-fields'>
          <label>Phone number</label>
          <input type="number" name="user_number" placeholder='+44 00000-00000' required />
        </div>
        <div className='input-fields'>
          <label>Message</label>
          <textarea name="message" />
        </div>
        <input type="submit" value="Send" className='submit-btn' />
      </form>
    </div>
  );
}

export default ContactForm