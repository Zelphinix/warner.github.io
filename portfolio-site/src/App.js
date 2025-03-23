import "./App.css";
import HomeScreen from "./components/Homescreen";

//importing components
import NavBar from "./components/NavBar";
import AboutMe from "./Sections/About/AboutMe";
import Contact from "./Sections/Contact/Contact";
import Projects from "./Sections/Projects/Projects";
import Resume from "./Sections/Resume/Resume";
import Homescreen from "./components/Homescreen";

function App() {
  return (
    <div className="App">
      <Homescreen />
      {/* <NavBar /> */}
      {/* <AboutMe /> */}
      {/* <Contact /> */}
      {/* <Projects /> */}
      {/* <Resume /> */}
    </div>
  );
}

export default App;
