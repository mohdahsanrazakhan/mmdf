import React from 'react';
import './Testimonial.css';
import { motion } from "framer-motion"

const TestimonialCard = ({ name, testimonial }) => {
  return (
    <div className="testimonial-card">
      <div className="testimonial-content">
        <div className='testimonial-info'>
          <p className="testimonial-text">{testimonial}</p>
          <p className="testimonial-author">- {name}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <>
      <h1 className='testimonial-heading'>Testimonials</h1>
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        className="testimonial-container">
        <TestimonialCard
          name="John Doe"
          testimonial="Excellent service, so helpful, I felt like a Huge weight lifted after receiving their best advice. A shout out to Christian who helped me through the whole process. Highly recommend this company to anyone who is worrying over debt. Thank you." />
        <TestimonialCard
          name="Jane Smith"
          testimonial="I can't recommend Make me debt free enough. We got into serious debt following redundancies and they took all the stress, pain and worry out of our situation and dealt with all creditors for us. There is never any judgement on your situation.." />
        <TestimonialCard
          name="Michillia Johnson"
          testimonial="I can't recommend Make me debt free enough. We got into serious debt following redundancies and they took all the stress, pain and worry out of our situation and dealt with all creditors for us. There is never any judgement on your situation.." />
      </motion.div>
    </>
  );
};

export default Testimonials;