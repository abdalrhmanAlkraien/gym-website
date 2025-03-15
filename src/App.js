import './App.css';
import Email from './Components/Email/Email';
import Footer from './Components/Footer/Footer';
import Hero from './Components/Hero/Hero';
import { Plan } from './Components/Plan/Plan';
import { Programs } from './Components/Programs/Programs';
import Testimonial from './Components/Testimonial/Testimonial';
import { Why } from './Components/Why/Why';

function App() {
  return (
    <div className="App">
      <Hero/>
      <Programs/>
      <Why/>
      <Plan/>
      <Testimonial/>
      <Email/>
      <Footer/>
    </div>
  );
}

export default App;
