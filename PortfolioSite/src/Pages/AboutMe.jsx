import "../Styles/AboutMe.css";

import cityBanner from "../assets/city.png";
import ScrollToTopButton from "../Components/ScrollToTopButton";
import DownloadCVButton from "../Components/DownloadCVButton";

const AboutMe = () => {
  return (
    <div className="about-page-wrapper">
      <ScrollToTopButton />
      <div
        className="about-banner"
        role="img"
        aria-label="Skyline view of Auckland city at sunset"
        style={{ backgroundImage: `url(${cityBanner})` }}
      />
      <section className="about-section">
        <div className="about-content">
          <h2>Kia Ora!</h2>
          <p>
            Nice to meet you! I'm Shriya Warner, a passionate and curious IT
            student currently completing my Bachelor of Technology, after
            earning my Diploma in Information Technology. I love solving
            problems, learning new technologies, and creating experiences that
            make life easier for people—whether it’s through clean code,
            thoughtful design, or creative collaboration. Originally from New
            Zealand, I’m super excited to be making the move to Australia once I
            finish my studies. It feels like the perfect place to grow my
            career, take on new challenges, and be part of something big.
            Outside of tech, I’m all about the outdoors, creativity, and finding
            inspiration in everyday moments—whether that’s through a coding
            project, a team brainstorm, or a hike through the bush.
          </p>
          <DownloadCVButton />
        </div>
      </section>
    </div>
  );
};

export default AboutMe;
