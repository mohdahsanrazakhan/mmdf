import React from "react";
import './About.css'
import { motion } from "framer-motion"

const About = () => {
  return (
    <div className="about_container">
      <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0}}
      transition={{ duration: 1.5 }}
      className="About_portion">
      <div className="About_Us">
        <h1 className="about_heading"><span className="change_color">ABOUT</span> US</h1>
        <p className="about_paragraph">Debt happen lets solve them together</p>
      </div>
      <div className="_portion">
        <div className="text_portion">
          <h2 className="about_subheading">MAKE ME DEBT FREE</h2>
          <h3 className="subheading_title">Empowering individuals to reclaim financial freedom, one debt at a time.</h3>
          <p className="about_paragraph_sub">
            "At Make Me Debt Free, we understand the burden of financial obligations and the stress it can bring. That's why we're dedicated to providing personalized solutions and expert guidance to help individuals break free from debt and regain control of their finances. With a focus on transparency, integrity, and compassion, we empower our clients to embark on a journey towards a debt-free future, enabling them to live life on their own terms."
          </p>
        </div>
      </div>
      <div className="Transitioning_portion DEBT_portion">
      </div>
      <div className="text_portion">
        <h2 className="about_subheading">Transitioning to a debt free future</h2>
        <h3 className="subheading_title">Our Innovative Solutions for Debt problems</h3>
        <p className="about_paragraph_sub">
          "At Make Me Debt Free, we're committed to revolutionizing the way people tackle debt challenges. Our innovative solutions combine cutting-edge technology with expert financial strategies to address each client's unique situation comprehensively. From personalized debt management plans to advanced tools for budgeting and financial education, we empower individuals to confront their debt head-on and achieve lasting financial freedom."
          We understand that dealing with debt can  be overwhelming. That’s why we are here to help you transition out of the debt.
        </p>
      </div>
      <div className="text_portion">
        <h2 className="about_subheading">What make us differnt </h2>
        <p className="about_paragraph_sub">
          <strong >You'll have our undivided attention:</strong> We offer debt help Whatever you need, whenever you need it, we will be around.
          <br></br>
          <strong>You'll be more than just a number to us:</strong>Our job is to listen to you, recognize your circumstances, and recommend a debt plan that suits your situation. </p>
      </div>
      {/* <div className="Ourteam_portion">
        <h1 className="about_heading">OUR TEAM</h1>
        <p className="about_paragraph_Team">
          "Our dedicated team at Make Me Debt Free comprises seasoned financial experts, compassionate advisors, and innovative thinkers united by a common goal: to guide individuals towards a debt-free future with confidence and support. With a wealth of experience in debt management, financial planning, and client advocacy, our team is committed to providing personalized solutions tailored to each client's needs. Grounded in integrity, empathy, and expertise, we work tirelessly to empower individuals to overcome financial challenges and build a brighter tomorrow."
        </p>
      </div> */}
    </motion.div>
    </div>
    
  );
};

export default About;