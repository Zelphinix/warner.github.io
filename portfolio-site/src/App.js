import './App.css';

//importing components
import NavBar from './components/NavBar';
import AboutMe from './Sections/About/AboutMe';
import Contact from './Sections/Contact/Contact';
import Projects from './Sections/Projects/Projects';
import Resume from './Sections/Resume/Resume';

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
