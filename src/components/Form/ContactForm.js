import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import './ContactForm.css'
import ReCAPTCHA from "react-google-recaptcha";

function ContactForm() {
  const [captchaVal, setCaptchaVal] = useState(null);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ppo90o4', 'template_qf56mfw', form.current, {
        publicKey: '9RFn30y7X_y-OHUCB',
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
      <h1 className='contact-heading'><span className='change_color'>Contact</span> us</h1>
      <h2>Let's talk!</h2>
      <p>Go ahead and send us a brief of your requirements!</p>
      <form ref={form} onSubmit={sendEmail}>
        <div className='input-fields'>
          <label for="user_name">Full name</label>
          <input type="text" name="user_name" placeholder='Type your name' required/>
        </div>
        <div className='input-fields'>
          <label for="user_email">Email</label>
          <input type="email" name="user_email" placeholder='Type your email' required />
        </div>
        <div className='input-fields'>
          <label for="user_number">Phone number</label>
          <input type="number" name="user_number" placeholder='+44 00000-00000' required />
        </div>
        <div className='input-fields'>
          <label for="message">Message</label>
          <textarea name="message" />
        </div>
        <ReCAPTCHA
            className="reCaptcha-style mt-3"
            sitekey="6LdIm9opAAAAAHbXiTkMjXyHlQoBMde2J8MzLFw4"
            onChange={(val) => setCaptchaVal(val)}
          />
        <button type="submit" value="Send" className='submit-btn' disabled={!captchaVal} >Send</button>
      </form>
    </div>
  );
}

export default ContactForm