import React from 'react';
import './Testimonial.css';

const TestimonialCard = ({ name, testimonial, imageUrl }) => {
  return (
    <div className="testimonial-card">
      <div className="testimonial-content">
        <img src={imageUrl} alt={name} className="testimonial-image" />
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
      <div className="testimonial-container">
        <TestimonialCard
          name="John Doe"
          testimonial="Excellent service, so helpful, I felt like a Huge weight lifted after receiving their best advice. A shout out to Christian who helped me through the whole process. Highly recommend this company to anyone who is worrying over debt. Thank you."
          imageUrl="https://media.licdn.com/dms/image/D4E03AQFYHck-qC5PAQ/profile-displayphoto-shrink_800_800/0/1666278688300?e=2147483647&v=beta&t=xXrYgWyvo6_V1lkLCL9E7pwG_XVCPmWC_oti3XIKeL0" />
        <TestimonialCard
          name="Jane Smith"
          testimonial="I can't recommend Make me debt free enough. We got into serious debt following redundancies and they took all the stress, pain and worry out of our situation and dealt with all creditors for us. There is never any judgement on your situation.."
          imageUrl="https://polisci.mit.edu/files/ps/styles/personimage/public/imce/gradstudents/JasmineEnglish500x500.jpg?itok=OP_fWN_T" />
        <TestimonialCard
          name="Michillia Johnson"
          testimonial="I can't recommend Make me debt free enough. We got into serious debt following redundancies and they took all the stress, pain and worry out of our situation and dealt with all creditors for us. There is never any judgement on your situation.."
          imageUrl="https://media.vogue.co.uk/photos/623073b8965d1c9a61335f86/1:1/w_1080,h_1080,c_limit/119765658_652043235429807_4429555365845323731_n.jpg" />
      </div>
    </>
  );
};

export default Testimonials;