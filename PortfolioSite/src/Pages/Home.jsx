import "../Styles/Home.css";

import shriya from "../assets/shriya.png";
import backgroundImage from "../assets/homescreen.jpg";

import ScrollToTopButton from "../Components/ScrollToTopButton";

const Home = () => {
  return (
    <div
      className="home-container"
      role="img"
      aria-label="Scenic view of snow-capped mountains and a lake at sunset in New Zealand, with a cloudy sky above."
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <ScrollToTopButton />
      <div className="home-overlay">
        <div className="home-content">
          <p className="home-subtitle">Bachelor of Technology</p>
          <h1 className="home-title">Shriya Warner</h1>
          <div className="home-author">
            <img src={shriya} alt="Shriya" className="home-image" />
            <p>2025 Made by Shriya Warner</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
