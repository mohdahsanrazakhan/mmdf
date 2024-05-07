import Hero from '../Hero/Hero'
import About from '../About/About';
import Solutions from '../Solutions/Solutions';
import Testimonials from '../Testimonial/Testimonial';
import Contact from '../Contact/Contact';

function Home() {
  return (
    <div className='container'>
      <div id="hero">
        <Hero />
      </div>
      <div id="aboutus">
        <About />
      </div>
      <div id="solution">
        <Solutions />
      </div>
      <div id="testimonials">
        <Testimonials />
      </div>
      <div id="contactus">
        <Contact />
      </div>
    </div>
  )
}

export default Home;