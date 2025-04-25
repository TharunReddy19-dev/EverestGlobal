import React, { useState, useEffect } from 'react';
import MainNavbar from '../../components/MainNavbar';
import '../services/Services.css';
import { useNavigate } from 'react-router-dom';
import gettyimages from '../../assets/images/gettyimages2.jpg';

const testimonials = [
  {
    title: "SOFTWARE DEVELOPMENT",
    message:
      "EVEREST Global Solutions aspire to bid high value, ground-breaking software development solutions within official time period since varying technology aperture implies space to immense opportunities capable of shifting your business paradigm to next level.",
    why: "So why EVEREST Global Solutions?",
  },
  {
    title: "TECHNOLOGY RECRUITING",
    message:
      "EVEREST Global Solutions recruiting solutions is persistent in contributing progressive functions by execution of hiring project as and when required for Tech Driven functions. Starting with customized methods to locate the precise candidate profile holding progressive abilities to screening, interview schedule and concluding appointments, we offer all essential services for modern business.",
    why: "What makes EVEREST Global Solutions better?",
  },
  {
    title: "OUTSOURCING",
    message:
      "EVEREST Global Solutions full Outsourcing solutions is fabricated with a strategy that target easy to go business operations, no matter where your office is located. Our workforce strategies is build with time and consist of essential structure that will turn your business to a big business in a inexpensive way. Qualonix Global Technologies serves clients globally with wide range of solutions that includes professional’s services for hiring, HR, Training, Development and a reliable workforce policy.",
    why: "So why EVEREST Global Solutions?",
  },
];

const Services = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  // Define route mapping based on index
  const routes = [
    "/homes/software-development",
    "/homes/technologyRecruiting",
    "/homes/Outsourcing",
  ];

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const handleReadMore = () => {
    navigate(routes[currentIndex]);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <MainNavbar />
      <section>
        <div className="service-container">
          <div className="containers1">
            <h1 className="h2">Services</h1>
            <div className="texts">
              <p>
                EVEREST Global Solutions is a global platform to deliver esteemed services under Technology Recruiting, Software Development, and Outsourcing platforms. Our motto is to connect you with the right qualified professionals with companies for optimum career opportunities, as well as assist firms in acquiring competent workforce assets.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="testimonial-slider">
          <div className="left-panel">
            <h2 className="titles">{testimonials[currentIndex].title}</h2>
            <p className="messages">{testimonials[currentIndex].message}</p>
            <p className="author">
              <strong>{testimonials[currentIndex].why}</strong>
            </p>

            <button className="read-more-btn" onClick={handleReadMore}>
              Read More <span className="arrow">→</span>
            </button>

            <div className="dots">
              {testimonials.map((_, idx) => (
                <span
                  key={idx}
                  className={`dot ${idx === currentIndex ? "active" : ""}`}
                  onClick={() => goToSlide(idx)}
                ></span>
              ))}
            </div>
          </div>

          <div className="right-panel">
            <img src={gettyimages} alt="testimonial visual" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
