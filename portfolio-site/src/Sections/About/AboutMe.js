import "./AboutMe.css";

function AboutMe() {
  return (
    <section className="about-section">
      <div className="about-content">
        <h2>Kia Ora!</h2>
        <p>
          Nice to meet you! I'm Shriya Warner, a passionate and curious IT
          student currently completing my Bachelor of Technology, after earning
          my Diploma in Information Technology. I love solving problems,
          learning new technologies, and creating experiences that make life
          easier for people—whether it’s through clean code, thoughtful design,
          or creative collaboration. Originally from New Zealand, I’m super
          excited to be making the move to Australia once I finish my studies.
          It feels like the perfect place to grow my career, take on new
          challenges, and be part of something big. Outside of tech, I’m all
          about the outdoors, creativity, and finding inspiration in everyday
          moments—whether that’s through a coding project, a team brainstorm, or
          a hike through the bush.
        </p>
        {/* <a className="cv-download" href="/ShriyaWarnerCV.pdf" download> */}
        <a
          className="cv-download"
          href="https://raw.githubusercontent.com/Zelphinix/warner.github.io/db165037a1147f3b43d7ff0efc43f6947650536b/portfolio-site/public/ShriyaWarnerCV.pdf"
          download
        >
          CV Download
        </a>
      </div>
    </section>
  );
}

export default AboutMe;
