import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainNavbar from '../../components/MainNavbar';
import careers from '../../assets/images/careers.jpg';
import careersImages from '../../assets/images/careerslatest.jpg';
import careers3 from '../../assets/images/Architects.jpg';
import './Careers.css';

const Careers = () => {
  const navigate = useNavigate();

  const career = [
    {
      id: 1,
      image: careers,
      category: "Software Developers",
     
      description: "Lead team of Oracle Fusion Cloud HCM developers. Design & architect Cloud HCM solutions.",
      location: "Miami, FL area (Travel/relocate to various unanticipated U.S. locations as required)",
      salary: "$149,781 per year",
      contact: "Send resume to: gupta@everestglobalsolutionsinc.com",
      path: "/careers/software-developer"
    },
    {
      id: 2,
      image: careersImages,
      category: "INFORMATION SYSTEM ANALYSTS",
      description: "Leverage LeanIX to analyze, consolidate & validate app landscape. Some job duties can be performed from home.",
      location: "Miami, FL area (Travel/relocate to various unanticipated U.S. locations as required)",
      salary: "$104,894 per year",
      contact: "Send resume to: gupta@everestglobalsolutionsinc.com",
      path: "/careers/comp&Info-System-Mang"
    },
    {
      id: 3,
      image: careers3,
      category: "COMPUTER SYSTEMS ENGINEERS/ARCHITECTS",
      description: "Lead team of Salesforce developers providing technical guidance, mentoring & code reviews. Design and architect Salesforce solutions.",
      location: "Miami, FL area (Travel/relocate to various unanticipated U.S. locations as required)",
      salary: "$138,486 per year",
      contact: "Send resume to: gupta@everestglobalsolutionsinc.com",
      path: "/careers/computerSys-eng-aecti"
    },
  ];

  return (
    <>
      <MainNavbar />
      <section className="careers-hero">
        <div className="careers-content">
          <h1 className="careers-heading">Join Our Team</h1>
          <p className="careers-subheading">Explore exciting career opportunities in I.T. and Systems Engineering</p>
        </div>
      </section>
      <section className="careers-wrapper">
        <div className="careers-grid">
          {career.map((job) => (
            <div key={job.id} className="job-card">
              <img src={job.image} alt={job.title} className="job-image" />
              <div className="job-content">
                <span className="job-category">{job.category}</span>
                <h3 className="job-title">{job.title}</h3>
                <div className="job-details">
                  <p><strong>Job Description:</strong> {job.description}</p>
                  <p><strong>Location:</strong> {job.location}</p>
                  <p><strong>Salary:</strong> {job.salary}</p>
                  <p><strong>Contact:</strong> {job.contact}</p>
                </div>
                <button className="apply-button" onClick={() => navigate(job.path)}>Apply Now</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Careers;