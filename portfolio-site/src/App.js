import './App.css';

//importing components
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import ResponsiveAppBar from './components/NavBar';
import Projects from './components/Projects';
import Resume from './components/Resume';

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar/>
      <AboutMe/>
      <Contact/>
      <Projects/>
      <Resume/>
    </div>
  );
}

export default App;
