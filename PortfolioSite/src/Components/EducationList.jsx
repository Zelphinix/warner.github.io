import "../styles/Education.css";

const EducationList = ({ items }) => {
  return (
    <div className="education-list">
      {items.map(function (item) {
        return (
          <div className="education-item" key={item.id}>
            <h2>{item.degree}</h2>
            <p className="education-institution">{item.institution}</p>
            <p className="education-duration">{item.duration}</p>
            <p className="education-description">{item.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default EducationList;
