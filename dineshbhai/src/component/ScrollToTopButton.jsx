import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import '../App.css'

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Function to handle scrolling
  const handleScroll = () => {
    const scrollY = window.scrollY;
    if (scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className={`scroll-to-top ${isVisible ? 'show' : 'hide'}`} onClick={scrollToTop}>
      <FaArrowUp />
    </div>
  );
};

export default ScrollToTopButton;
