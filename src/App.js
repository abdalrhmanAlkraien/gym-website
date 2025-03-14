import './App.css';
import Hero from './Components/Hero/Hero';
import { Programs } from './Components/Programs/Programs';
import { Why } from './Components/Why/Why';

function App() {
  return (
    <div className="App">
      <Hero/>
      <Programs/>
      <Why/>
    </div>
  );
}

export default App;
