import React from "react";
import "./WorkExperience.css";

const experiences = [
  {
    date: "2025",
    company: "Southern Institute of Technology",
    title: "Tuakana",
    stack: null,
    details: [
      "As a Tuākana, I provide academic and social support along with guidance towards my Tēina, ensuring their understanding of current learning material and well-being outside a classroom setting. This involves explaining computer concepts, sharing study techniques, and offering encouragement to build their confidence and facilitate their academic progress. Through active listening and tailored support, I contribute to a positive and collaborative learning environment."
    ]
  },
  {
    date: "2022",
    company: "LSG Global Catering",
    title: "LSG Global Catering",
    stack: null,
    details: [
      "I supervised a team of up to fourteen production personnel, ensuring efficient operations and adherence to all company policies. Actively identified key areas for process improvement to enhance overall productivity and performance. Provided ongoing guidance and support to team members, ensuring adherence to operating standards and fostering a collaborative, high-performing work environment."
    ]
  },
  {
    date: "2019",
    company: "Subway",
    title: "Supervisor",
    stack: null,
    details: [
      "Supervised and led production personnel to ensure optimal workflow and efficiency across operations. I prepared effective work schedules to optimize productivity and meet deadlines. I identified areas within the business where improvements could be made and implemented strategies to enhance overall performance. Additionally, I proactively addressed issues within the team, providing continuous support and guidance to ensure alignment with operating standards."
    ]
  }
];

const WorkExperience = () => {
  return (
    <div>
      <div className="work-experience-banner" />

      <section className="work-section">
        <h2 className="section-title">Work Experience</h2>
        <div className="timeline">
          {experiences.map((exp, idx) =>
            <div className="timeline-entry" key={idx}>
              <div className="timeline-left">
                <p className="date">
                  {exp.date}
                </p>
                <p className="company">
                  <strong>
                    {exp.company}
                  </strong>
                </p>
              </div>
              <div className="timeline-middle">
                <div className="dot" />
                {idx < experiences.length && <div className="line" />}
              </div>
              <div className="timeline-right">
                <p className="title">
                  <strong>
                    {exp.title}
                  </strong>
                </p>
                {exp.stack &&
                  <p className="stack">
                    {exp.stack}
                  </p>}
                <ul className="details">
                  {exp.details.map((d, i) =>
                    <li key={i}>
                      {d}
                    </li>
                  )}
                </ul>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default WorkExperience;
