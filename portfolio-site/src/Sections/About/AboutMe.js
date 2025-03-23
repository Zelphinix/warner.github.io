import "./AboutMe.css";
// import { FaGraduationCap, FaBook } from "react-icons/fa";

function AboutMe() {
  return (
    // <section id="about">
    //   <div className="aboutText">
    //     <br />
    //     <h5>Meet Me</h5>
    //     <h2>About Me</h2>
    //   </div>
    //   <div className="aboutMePage">
    //     <div className="aboutMe">
    //       <div className="aboutMe-Image">
    //         <img src="https://t3.ftcdn.net/jpg/02/47/02/84/360_F_247028431_yPo8nwG9HuQN6oHyix8YnhYBeOXtF0c4.jpg" />
    //       </div>
    //     </div>

    //     <div className="aboutMeInformation">
    //       <div className="about_cards">
    //         <article className="about_card">
    //           <div
    //             className="aboutIcon"
    //             style={{ display: "flex", justifyContent: "center" }}
    //           >
    //             <FaGraduationCap />
    //           </div>
    //           <h5>Degree</h5>
    //           <small>
    //             BIT
    //             <br />
    //             <i>Southern Institute of Technology</i>
    //           </small>
    //         </article>

    //         <article className="about_card">
    //           <div
    //             className="aboutIcon"
    //             style={{ display: "flex", justifyContent: "center" }}
    //           >
    //             <FaBook />
    //           </div>
    //           <h5>GPA</h5>
    //           <small>A-</small>
    //         </article>
    //       </div>
    //       <div className="about_writing">
    //         <p>
    //           This is a paragraph about who I am, my position, where I study,
    //           what I want from a job, academic experience, work experience,
    //           excited to learn and challenge myself. This is a paragraph about
    //           who I am, my position, where I study, what I want from a job,
    //           academic experience, work experience, excited to learn and
    //           challenge myself. This is a paragraph about who I am, my position,
    //           where I study, what I want from a job, academic experience, work
    //           experience, excited to learn and challenge myself. This is a
    //           paragraph about who I am, my position, where I study, what I want
    //           from a job, academic experience, work experience, excited to learn
    //           and challenge myself.{" "}
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    // </section>
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
        <a
          className="cv-download"
          href="portfolio-site/public/ShriyaWarnerCV.pdf"
          download
        >
          CV Download
        </a>
      </div>
    </section>
  );
}

export default AboutMe;
