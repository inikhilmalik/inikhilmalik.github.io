import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import { Homepage } from './Components/Homepage';
import { Education } from './Components/Education';
import { Projects } from './Components/Projects';
import { Skills } from './Components/Skills';
import { Github } from './Components/Github';
import Contact from './Components/Contact';
import { About } from './Components/About';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Homepage/>
      <About />
      <Education />
      <Projects/>
      <Skills/>
      <Github/>
      <Contact/>
    </div>
  );
}

export default App;
