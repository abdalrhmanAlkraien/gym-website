import './App.css';
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
    </div>
  );
}

export default App;
