import React from "react";
import "./Projects.css";

const projects = [
  {
    name: "Ghostlight Caverns",
    image: "/ghostlightCaverns.png",
    description: "A puzzle-adventure game exploring logic and shadows.",
    tools: ["Unity", "C#", "Piskel"]
  },
  {
    name: "BLOOM",
    image: "/Bloom.png",
    description: "A safe-space focused social platform concept.",
    tools: ["Figma", "React", "Illustrator"]
  },
  {
    name: "AI Resume Screener",
    image: "/AI.png",
    description: "Reads and summarizes resumes to match jobs.",
    tools: ["Gemini", "LangChain", "Python"]
  },
  {
    name: "Portfolio Site",
    image: "/homescreen.jpg",
    description: "This site! Built with love and caffeine.",
    tools: ["React", "Vite", "Framer Motion"]
  }
];

const Projects = () => {
  return (
    <div>
      <div className="projects-banner" />
      <section className="projects-autoscroll">
        <h2 className="projects-title">Projects</h2>
        <div className="scroll-wrapper">
          <div className="scroll-track">
            {[...projects, ...projects].map((proj, idx) =>
              <div className="scroll-card" key={idx}>
                <img src={proj.image} alt={proj.name} />
                <h1>
                  {proj.name}
                </h1>
                <p className="desc">
                  {proj.description}
                </p>
                <p className="tools">
                  Tools: {proj.tools.join(", ")}
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
