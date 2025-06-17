import { useEffect, useState } from "react";

import "../styles/Projects.css";

import projectsData from "../assets/projects.json";

import homeScreenImg from "../assets/homescreen.jpg";
import aiImg from "../assets/ai.png";
import bloomImg from "../assets/Bloom.png";
import gameImg from "../assets/ghostlightCaverns.png";

import ScrollToTopButton from "../Components/ScrollToTopButton";

// map image name to its imported vr
const imageMap = {
  "homescreen.jpg": homeScreenImg,
  "ai.png": aiImg,
  "Bloom.png": bloomImg,
  "ghostlightCaverns.png": gameImg
};

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // adding the image to the projects RAHHAHHADHHRHAH
    const myProjects = projectsData.map(project => ({
      ...project,
      image: imageMap[project.imageFileName]
    }));
    // new array of projects after image added
    setProjects(myProjects);
  }, []);

  return (
    <div className="projects-page-wrapper">
      <ScrollToTopButton />
      <div
        className="projects-banner"
        role="img"
        // accesibilitytytyy :DDD
        aria-label="Hands typing on a keyboard at a desk, with Rubik’s cubes and colorful stress balls nearby, surrounded by computer cables and a laptop stand."
      />
      {/* <div className="projects-banner" /> */}

      <section className="projects-section">
        <h1 className="projects-title">My Projects</h1>

        <div className="projects-list">
          {/* loop though projects and display */}
          {projects.map((project, index) =>
            <div key={index} className="project-item">
              <div className="project-details">
                <h2>
                  {project.title}
                </h2>
                <p className="project-tech">
                  {project.tech}
                </p>
                <p className="project-description">
                  {project.description}
                </p>
              </div>
              <div className="project-image-wrapper">
                <img
                  src={project.image}
                  // accessibility bay bee
                  alt={`${project.title} screenshot`}
                  className="project-image"
                />
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Projects;
