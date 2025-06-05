import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
/* import software3 from '../../assets/images/OutImages.jpeg'; */
import software3 from '../../assets/images/groupToys.jpg'
import MainNavbar from '../../components/MainNavbar';

const Outsourcing = () => {
 const [active, setActive] = useState(null);
const toggleSection = (section) => {
  setActive(active === section ? null : section);
};
const sections = [
  {
    title: 'Growth',
    content: (
      <div>
        <p>
        We assure quality execution, without which finding precise growth is tough. Our strategies rely on long term experience capable of offering you notable returns on what you are paying for. It also enables to reach an efficient implementation of organization’s working, a jump start to productivity and strong strategic escalation of operations.
        </p>
      </div>
    ),
  },
  {
    title: 'Research',
    content: (
      <div>
        <p>
        Outsourcing carries different niche, and we at EVEREST Global Solutions Inc believing in staying ahead by researching current market trends. This helps us to give accurate solutions and results accordingly for a long period.
        </p>
      </div>
    ),
  },
  {
    title: 'Work with right Talent',
    content: (
      <div>
        <p>
        Our consulting group will assist you in locating fresh valuable talents to boost operations and reach goals. Our quality approach towards providing valuable solution makes us a leading company in this field. We don’t believe in compromising in finding the best talents fuelling your business to next level.
        </p>
      </div>
    ),
  },
];
return (
 <>
 <MainNavbar/>
 <section>
  <div className='Careers'>
 <div><h1 className='careers-heading-home'>OUTSOURCING</h1></div>
 </div>
 </section>
 <section>
  <div className="careers-container">
    <div className="careers-left">
  {/* <h1> */}
  {/*   OUTSOURCING */}
  {/*     </h1> */}
      <p>
      EVEREST Global Solutions Inc full Outsourcing solutions is fabricated with a strategy that target easy to go business operations, no matter where your office is located. Our workforce strategies is build with time and consist of essential structure that will turn your business to a big business in a inexpensive way. Qualonix Global Technologies serves clients globally with wide range of solutions that includes professional’s services for hiring, HR, Training, Development and a reliable workforce policy.
Your business can be doing more, but needs a valuable workforce and a strategy which can turns a tough decision to a quick decision for moving ahead. With the help of cutting edge technology we offer you a platform to find solutions for your business challenges and deliver higher returns independent to geo-location.
For your business need, we bring you a team of highly skilled professionals who will assist you in appointing the right size of work force and manage them from one place. Our pre-strategies are ready to use platform for implementing expansion globally.
      </p>
      <h2>Outsourcing features</h2>
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
      <img src={software3} alt="Team collaboration" />
    </div>
  </div>
  </section>
  </>

  );
};

export default Outsourcing