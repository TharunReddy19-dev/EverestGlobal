import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import software from '../../assets/images/Softwarebg.jpg';
import MainNavbar from '../../components/MainNavbar';


const SoftwareDevelopment = () => {
  const [active, setActive] = useState(null);

  const toggleSection = (section) => {
    setActive(active === section ? null : section);
  };

  const sections = [
    {
      title: 'High Quality Software Development',
      content: (
        <div>
          <p>
          EVEREST Global Solutions Inc develops high value software for various firms and our vast experience has helped to deliver quality sustainable solutions. Our experts ensure the solution have to fit as per the necessity and can be created swiftly, assembled from a bug-free coding.
          </p>
        </div>
      ),
    },
    {
      title: 'Digital Consultation',
      content: (
        <div>
          <p>
          Still have doubts or willing to talk t us, we are available for your requirements 24×7. Our experts will assist you in finding the best promising solutions to drive your business on a high speed tech highway.
          </p>
        </div>
      ),
    },
    {
      title: 'Cost-Efficient',
      content: (
        <div>
          <p>
          Want to scale your business process on higher grounds, and waiting for what to do next, you are at the right place. Software Development can be costly if implementation and pre-preparation is weak. We make sure no quality compromise and assure building up high quality cost-effective platform to keep you ahead all the time.
          We pledge quality with economical approach for your requirements. Our Agile-Powered solutions are designed by experienced professionals. We also connect you with a team of experts who can offer you supporting services for moving ahead with integration, consultation, technologies and quality.
          </p>
        </div>
      ),
    },
  ];

  return (
    <>
    <MainNavbar/>
    <section>
  <div className='Careers-imgs'>
 <div><h1 className='careers-heading-home'>SOFTWARE DEVELOPMENT</h1></div>
 </div>
 </section>
    <section>
    <div className="careers-container">
      <div className="careers-left">
        <p>
        EVEREST Global Solutions Inc aspire to bid high value, ground-breaking software development solutions within official time period since varying technology aperture implies space to immense opportunities capable of shifting your business paradigm to next level.
  You can trust us to empower your business with custom software solution premeditated and developed for utmost integral precision. Our assortment of software solutions consist of custom applications for capitalizing business productivity, building a bridge for your customers, so that they can connect or contact effortlessly, and finding answers for challenges of operations.
   In this competitive era, many firms climb great heights with the help of technology. No matter if you are a small, mid or a big firm, technology is for everyone. The growing number of platforms has connected a web of virtual platform where your business can prosper if you have the best tools.
        </p>
        <h2>So why EVEREST Global Solutions Inc?</h2>

        <div className="accordion-section">
          {sections.map(({ title, content }) => (
            <div key={title} className="accordion-item">
              <div className="accordion-title" onClick={() => toggleSection(title)}>
                <span>{title}</span>
                {active === title ? <FaChevronUp /> : <FaChevronDown />}
              </div>
              {active === title && <div className="accordion-content">{content}</div>}
            </div>
          ))}
        </div>
      </div>

      <div className="careers-right">
        <img src={software} alt="Team collaboration" />
      </div>
    </div>
    </section>
    </>
    );
  };

export default SoftwareDevelopment