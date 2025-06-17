import "../styles/Education.css";

import DownloadAcademicTranscriptButton from "../Components/DownloadAcademicTranscriptButton";
import ScrollToTopButton from "../Components/ScrollToTopButton";

const educationData = [
  {
    years: "2024 - Present",
    degree: "Bachelor of Technology",
    institution: "Southern Institute of Technology",
    detail: "86 WAM Equivalent"
  },
  {
    years: "2022 - 2023",
    degree: "Diploma of Information Technology",
    institution: "Aspire2 International",
    detail: "Specialisation in Technical Support"
  }
];

const awardsData = [
  {
    years: "2024",
    degree: "Jade Award",
    institution: "Southern Institute of Technology",
    detail: "Top Student in Year (2nd Year Bachelor of Technology)"
  }
];

const Education = () => {
  return (
    <div className="education-page-wrapper">
      <ScrollToTopButton />
      <div
        className="education-banner"
        role="img"
        aria-label="Southern Institute of Technology campus in Invercargill, New Zealand, featuring cherry blossom trees in full bloom and a clock tower in the background."
      />
      {/* <div className="education-banner" /> */}

      <section className="education-section">
        <h1 className="education-title">My Education</h1>

        {educationData.map((item, index) =>
          <div key={index} className="education-entry">
            <p className="years">
              {item.years}
            </p>
            <div className="education-row">
              <div className="left">
                <p className="degree">
                  <strong>
                    {item.degree}
                  </strong>
                </p>
                <p className="institution">
                  {item.institution}
                </p>
              </div>
              <div className="right">
                <p>
                  {item.detail}
                </p>
              </div>
            </div>
          </div>
        )}

        <h2 className="education-subtitle">Awards</h2>

        {awardsData.map((item, index) =>
          <div key={index} className="education-entry">
            <p className="years">
              {item.years}
            </p>
            <div className="education-row">
              <div className="left">
                <p className="degree">
                  <strong>
                    {item.degree}
                  </strong>
                </p>
                <p className="institution">
                  {item.institution}
                </p>
              </div>
              <div className="right">
                <p>
                  {item.detail}
                </p>
              </div>
            </div>
          </div>
        )}
        <DownloadAcademicTranscriptButton />
      </section>
    </div>
  );
};

export default Education;
