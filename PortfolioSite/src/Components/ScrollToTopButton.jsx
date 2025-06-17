import { useState, useEffect } from "react";

import "../styles/ScrollToTopButton.css";

function ScrollToTopButton() {
  // setting if its visible
  const [isVisible, setIsVisible] = useState(false);

  // show visible when down the page
  useEffect(function () {
    function handleScroll() {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }

    // when user scrolls
    window.addEventListener("scroll", handleScroll);

    // remove when not needed
    return function () {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // its in the name
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      // like butter
      behavior: "smooth",
    });
  }

  // dont show it
  if (!isVisible) {
    return null;
  }

  return (
    <button className="scroll-to-top" onClick={scrollToTop}>
      ↑ Top
    </button>
  );
}

export default ScrollToTopButton;
