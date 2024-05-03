import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './pages/Navbar';
import Home from './pages/Home/Home';
import DebtCalculator from './pages/Calculator/Calculator';
import Footer from './pages/Footer/Footer';

function App() {
  return (
    <div>
      <Navbar /> 
      <Home />
      {/* <DebtCalculator /> */}
      <Footer />
    </div>
  );
}

export default App;
