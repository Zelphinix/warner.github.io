import "./App.css";

//importing components
import AboutMe from "./Sections/About/AboutMe";
import Projects from "./Sections/Projects/Projects";
import Homescreen from "./components/Homescreen";
import Education from "./Sections/Education/Education";
import WorkExperience from "./Sections/WorkExperience/WorkExperience";
import Contact from "./Sections/Contact/Contact";
function App() {
  return (
    <div className="App">
    <head>
        <title>Shriya Warner - Portfolio</title>
    </head>
      <Homescreen />
      <AboutMe />
      <Education />
      <Projects />
      <WorkExperience />
      <Contact />
    </div>
  );
}

export default App;
