import React from "react";
import "./Projects.css";

import bloom from "../../assets/Bloom.png";
import ghostlightcaverns from "../../assets/ghostlightCaverns.png";
import homescreen from "../../assets/homescreen.jpg";
import AI from "../../assets/AI.png";

const projects = [
  {
    name: "Ghostlight Caverns",
    image: ghostlightcaverns,
    description: "A puzzle-adventure game exploring logic and shadows.",
    tools: ["Unity", "C#", "Piskel"]
  },
  {
    name: "BLOOM",
    image: bloom,
    description: "A safe-space focused social platform concept.",
    tools: ["Figma", "React", "Illustrator"]
  },
  {
    name: "AI Resume Screener",
    image: AI,
    description: "Reads and summarizes resumes to match jobs.",
    tools: ["Gemini", "LangChain", "Python"]
  },
  {
    name: "Portfolio Site",
    image: homescreen,
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
        <p className="projects-intro">
          I build things that spark curiosity—tools, games, and ideas brought to
          life with code. Whether it's solving problems or brainstorming ideas,
          I love the challenge and creativity that comes with building something
          from scratch.
        </p>

        <div className="featured-project">
          <h3>
            <span className="emoji">🎮</span> Ghostlight Caverns
          </h3>
          <p className="featured-description">
            Step into the shadows and test your wits.
            <strong> Ghostlight Caverns</strong> is a puzzle-adventure game
            where logic is your lantern. Navigate a mysterious underground world
            where light reveals, but shadows deceive.
          </p>
          <div className="cta-container">
            <a
              className="cta-button"
              href="https://cifserv.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              👉 Play Ghostlight Caverns
            </a>
          </div>
        </div>

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
