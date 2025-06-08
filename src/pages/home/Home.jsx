
import React,{ useEffect } from "react";
import "../home/home.css";
import image1 from '../../assets/images/image1.jpg'
import Recruting from '../../assets/images/Recruting.jpg'
import MainNavbar from "../../components/MainNavbar";
import { useNavigate} from "react-router-dom";
import outsourcing from '../../assets/images/outsourcing.jpg'
/* import { useNavigate } from "react-router-dom"; */



const Home = () => {
  const navigate = useNavigate();

   useEffect(() => {
    document.title = "Everest Global Solutions Inc";
  }, []);
  
  return (
    <>
  <MainNavbar/>
  <section className="hero-section-home">

      <video className="hero-video" autoPlay muted loop playsInline>
        <source src="/background-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="hero-overlay" />
      <div className="hero-content">
        <h1>EVEREST GLOBAL SOLUTIONS INC <br/></h1>
        {/* <button className="hero-btn">Explore Trends</button> */}
        <h3>Technology Recruiting, Software Development and Outsourcing</h3>
      </div>
      
  </section>

  <section>
        <div className="report-container">
          <div className="report-text">
            <h1 className="heading">Software Development</h1>
            <p className="description">
            Aspire to bid high value, ground-breaking software development solutions within official time period since varying technology aperture implies space to immense opportunities capable of shifting your business paradigm to next level.
            </p>
            <div className="button">
            <button className="botton1" onClick={() => navigate('/homes/software-development')}>
             Learn more
             </button>
             </div>
          </div>

          <div className="report-image">
            <img
              src={image1}
              alt="People in modern office"
              className="rounded-image"
            />
          </div>
        </div>
      </section>

     <section>
      <div className="report-container">
      <div className="report-image">
       <img
      src={Recruting}
      alt="People in modern office"
      className="rounded-image"/>
      </div>

      <div className="report-text">
      <h1 className="heading">Technology Recruiting
       </h1>
       <p className="description">
      EVEREST Global Solutions Inc recruiting solutions is persistent in contributing progressive functions by execution of hiring project as and when required for Tech Driven functions.
        </p>
        <div className="button">
       <button className="botton1" onClick={() => navigate('/homes/technologyRecruiting')}>
      Learn more
      </button>
      </div>
      </div>
      </div>
       </section>
   
   <section>
   <div className="report-container">

   <div className="report-text">
<h1 className="heading">Outsourcing
</h1>
<p className="description">
EVEREST Global Solutions full Outsourcing solutions is fabricated with a strategy that target easy to go business operations, no matter where your office is located.
</p>
<div className="button">
<button className="botton1" onClick={() => navigate('/homes/Outsourcing')}>
   Learn more
 </button>
 </div>
 </div>
   <div className="report-image">
 <img
src={outsourcing}
alt="People in modern office"
className="rounded-image"/>
</div>

</div>

   </section>
    </>
  );
}
export default Home




