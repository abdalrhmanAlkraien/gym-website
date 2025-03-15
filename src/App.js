import './App.css';
import Hero from './Components/Hero/Hero';
import { Plan } from './Components/Plan/Plan';
import { Programs } from './Components/Programs/Programs';
import { Why } from './Components/Why/Why';

function App() {
  return (
    <div className="App">
      <Hero/>
      <Programs/>
      <Why/>
      <Plan/>
    </div>
  );
}

export default App;
