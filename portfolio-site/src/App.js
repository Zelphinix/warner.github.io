import "./App.css";

//importing components
// import NavBar from "./components/NavBar";
// import HomeScreen from "./components/Homescreen";
// import Resume from "./Sections/Resume/Resume";
// import Contact from "./Sections/Contact/Contact";
import AboutMe from "./Sections/About/AboutMe";
import Projects from "./Sections/Projects/Projects";
import Homescreen from "./components/Homescreen";
import Education from "./Sections/Education/Education";
import WorkExperience from "./Sections/WorkExperience/WorkExperience";
import Contact from "./Sections/Contact/Contact";
function App() {
  return (
    <div className="App">
      <Homescreen />
      <AboutMe />
      <Education />
      <Projects />
      <WorkExperience />
      <Contact />
      {/* <Resume /> */}
      {/* <NavBar /> */}
    </div>
  );
}

export default App;
