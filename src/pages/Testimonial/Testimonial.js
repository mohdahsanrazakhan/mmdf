import React from 'react';
import './Testimonial.css';
import { motion } from "framer-motion"

const TestimonialCard = ({ name, testimonial }) => {
  return (
    <div className="testimonial-card">
      <div className="testimonial-content">
        <div className='testimonial-info'>
          <div className='testimonial-stars'>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#DAA520" class="bi bi-star-fill" viewBox="0 0 16 16">
            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#DAA520" class="bi bi-star-fill" viewBox="0 0 16 16">
            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#DAA520" class="bi bi-star-fill" viewBox="0 0 16 16">
            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#DAA520" class="bi bi-star-fill" viewBox="0 0 16 16">
            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#DAA520" class="bi bi-star-fill" viewBox="0 0 16 16">
            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
          </svg>
          
          </div>
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
          testimonial="I can't recommend Make me debt free enough. We got into serious debt following redundancies and they took all the stress, pain and worry out of our situation and dealt with all creditors for us. There is never any judgement on your situation." />
        <TestimonialCard
          name="Michillia Johnson"
          testimonial="MakeMeDebtFree have been very helpful every step of the way, in breaking down all my initial problems, explaining the issues and helping me to establish a viable route. Communication has been great, attentive and kind." />
      </motion.div>
    </>
  );
};

export default Testimonials;