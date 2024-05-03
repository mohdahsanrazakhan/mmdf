import Hero from '../Hero/Hero'
import About from '../About/About';
import Solutions from '../Solutions/Solutions';
import Testimonials from '../Testimonial/Testimonial';
import Contact from '../Contact/Contact';

function Home() {
  return (
    <div className='container'>
      <Hero />
      <About />
      <Solutions />
      <Testimonials />
      <Contact />
    </div>
  )
}

export default Home;