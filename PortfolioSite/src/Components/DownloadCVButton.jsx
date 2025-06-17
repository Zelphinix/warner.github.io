import "../styles/DownloadButton.css";

import cvFile from "../assets/CV.pdf";

const DownloadCVButton = () => {
  return (
    <a
      href={cvFile}
      download="CV.pdf"
      target="_blank"
      rel="noopener noreferrer"
    >
      <button className="download-button">Download CV</button>
    </a>
  );
};

export default DownloadCVButton;
