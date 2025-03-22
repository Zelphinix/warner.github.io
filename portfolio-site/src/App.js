import './App.css';

//importing components
import NavBar from './components/NavBar';
import AboutMe from './components/About/AboutMe';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Resume from './components/Resume';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <AboutMe/>
      <Contact/>
      <Projects/>
      <Resume/>
    </div>
  );
}

export default App;
