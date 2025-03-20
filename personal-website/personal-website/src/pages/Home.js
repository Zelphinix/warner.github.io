import AboutMe from "../sections/AboutMe";
import Contact from "../sections/Contact";
import Projects from "../sections/Projects";
import { Box } from "@mui/material";

// import Profile from "../components/Profile";

function Home() {
  return (
    <Box>
      <AboutMe />
      <Projects />
      <Contact />
    </Box>
  );
}

export default Home;
