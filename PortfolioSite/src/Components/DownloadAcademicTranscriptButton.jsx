import "../styles/DownloadButton.css";

import transcriptFile from "../assets/AcademicTranscript.pdf";

const DownloadAcademicTranscriptButton = () => {
  return (
    <a
      href={transcriptFile}
      download="Transcript.pdf"
      target="_blank"
      rel="noopener noreferrer"
    >
      <button className="download-button">Download Academic Transcript</button>
    </a>
  );
};

export default DownloadAcademicTranscriptButton;
