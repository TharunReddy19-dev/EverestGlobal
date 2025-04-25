import React from 'react';
import MainNavbar from '../../components/MainNavbar';
import '../../pages/aboutUs/About.css';
import benefits from '../../assets/images/benefits.jpeg';
import mission from '../../assets/images/mission.jpg';

const AboutUs = () => {
  return (
    <>
      <MainNavbar />
      <section className="hero-sections-abt">
        <div className="hero-overlay-abt" />
        <div className="hero-content-abt">
          <div className="about-header">
            <h1>ABOUT US</h1>
          </div>
          <div className="about-content">
            <div className="passage">
              <p>
                EVEREST Global Solutions is a fast growing global, end-to-end IT Consulting Services and Solutions firm. We work with Fortune 100 firms in the Financial Services, Technology, Communications & Media, Manufacturing and Retail domains by engaging the customer in a ‘collaborative’ manner, by being consultative and by offering domain specific solutions. EVEREST Global Solutions delivers highly responsive and innovative solutions that bridge our client’s Execution Gaps through our proprietary methodologies – Momentum Consulting Framework, Asset Based Services(ABS) and Collaborative Engagement Model – helping them experience accelerated value.
              </p>
              <p>
                We deliver a full portfolio of services that include Consulting, Application Development and Management, Independent Testing, Outsourced Product Development, Enterprise Software Solutions, Business Intelligence & Datawarehousing and Resource Augmentation.
              </p>
              <p>
                EVEREST Global Solutions is a leading global business and information technology services company that leverages deep industry and functional expertise, leading technology practices, and an advanced, global delivery model to help clients transform their highest-value business processes and improve their business performance.
              </p>
              <p>
                The company’s professionals excel in enterprise solutions, supply chain management, client relationship management, business intelligence, business process quality, engineering and product lifecycle management, and infrastructure services, among other key capabilities.
              </p>
              <p>
                EVEREST Global Solutions pioneered the Universal Delivery Process (UDP), which emerged as a disruptive force in the industry leading to the rise of offshore outsourcing. The UDP is based on the principle of taking work to the location where the best talent is available, where it makes the best economic sense, with the least amount of acceptable risk.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Employee Benefits */}
      <section>
        <div className="about-benefits">
          <div className="report-benefits">
            <img src={benefits} alt="Employee Benefits" className="image-benefits" />
          </div>
          <div className="report-text">
            <h1>Employee Benefits</h1>
            <p className="report-benefits">
              EVEREST Global Solutions takes pleasure in making its Work Place best for its employees. We follow a culture of work together for Company Benefits, which makes every employee, a part and parcel of EVEREST Global Solutions. Our Employee Benefit scheme is designed to make job most delightful and satisfying. We serve our employees with the Attractive Compensation and Perks as per their job standards. We provide training to our employees in order to enhance their professional and personal skill sets. Every year special Training Programs are designed for EVEREST Global Solutions Technology staff to provide them the right skills and motivations at the right time.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section>
        <div className="about-benefits">
          <div className="report-text">
            <h1>Mission Statement</h1>
            <p className="report-benefits">A company is only as good as the promises it keeps</p>
            <p className="report-benefits">
              EVEREST Global Solutions is committed to being the highest quality supplier of employment solutions to its clients. Our mission is to provide best staffing services for our clients and our technical consultants. We believe in equipping our staff with the skills needed to accommodate the ever changing needs of today’s business. We will provide the best working place for our employees which will encourage personal and professional growth. Our mission is to provide innovative and exclusive Staffing solutions to our valuable clients as well as to place best IT Professionals at most suited positions in best working environments as per their skill sets.
            </p>
          </div>
          <div className="report-benefits">
            <img src={mission} alt="Mission" className="image-benefits" />
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
