import React from "react";
import "./Education.css";

const Education = () => {
  return (
    <section className="education-section">
      <div className="education-banner" />

      <div className="education-content">
        <h2>Education</h2>

        <div className="education-entry">
          <p className="years">2023 - 2025</p>
          <div className="education-row">
            <div className="left">
              <p className="degree">
                <strong>Bachelor of Technology</strong>
              </p>
              <p className="institution">Southern Institute of Technology</p>
            </div>
            <div className="right">
              <p>86 WAM Equivalent</p>
            </div>
          </div>
        </div>

        <div className="education-entry">
          <p className="years">2022 - 2023</p>
          <div className="education-row">
            <div className="left">
              <p className="degree">
                <strong>Diploma of Information Technology</strong>
              </p>
              <p className="institution">Aspire2 International</p>
            </div>
            <div className="right">
              <p>Specialisation in Technical Support</p>
            </div>
          </div>
        </div>

        <h2>Awards</h2>

        <div className="education-entry">
          <p className="years">2024</p>
          <div className="education-row">
            <div className="left">
              <p className="degree">
                <strong>Jade Award</strong>
              </p>
              <p className="institution">Southern Institute of Technology</p>
            </div>
            <div className="right">
              <p>Top Student in Year (2nd Year Bachelor of Technology) </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
