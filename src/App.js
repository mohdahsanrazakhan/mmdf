import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './pages/Navbar';
import Hero from './pages/Hero/Hero';
import About from './pages/About/About';
import Solutions from './pages/Solutions/Solutions';
import Contact from './pages/Contact/Contact';
import DebtCalculator from './pages/Calculator/Calculator';

function App() {
  return (
    <div className='container'>
      <Navbar /> 
      <Hero />
      <About />
      <Solutions />
      {/* <Contact /> */}
      {/* <About /> */}
      <DebtCalculator />
    </div>
  );
}

export default App;
