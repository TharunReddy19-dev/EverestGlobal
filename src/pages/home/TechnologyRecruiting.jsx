import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import software1 from '../../assets/images/softwareBG2.png';
import MainNavbar from '../../components/MainNavbar';



const TechnologyRecruiting = () => {
 const [active, setActive] = useState(null);
 const toggleSection = (section) => {
   setActive(active === section ? null : section);
 };
 const sections = [
   {
     title: 'Ease to use',
     content: (
       <div>
         <p>
         EVEREST Global Solutions develops high value software for various firms and our vast experience has helped to deliver
solution have to fit as per the necessity and can be created swiftly, assembled from a bug-free coding.
         </p>
       </div>
     ),
   },
   {
     title: 'Productive Intelligence',
     content: (
       <div>
         <p>
         Still have doubts or willing to talk t us, we are available for your requirements 24×7. Our experts will assist you i
business on a high speed tech highway.
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
  <div><h1 className='careers-heading-home'>  TECHNOLOGY RECRUITING </h1></div>
  </div>
  </section>
  <section>
   <div className="careers-container">
     <div className="careers-left">
       {/* <h1> */}
       {/*   TECHNOLOGY RECRUITING  */}
       {/* </h1> */}
       <p>
       EVEREST Global Solutions recruiting solutions is persistent in contributing progressive functions by execution of hiring project as and when required for Tech Driven functions. Starting with customized methods to locate the precise candidate profile holding progressive abilities to screening, interview schedule and concluding appointments, we offer all essential services for modern business.
Empowered by cutting edge technology, our services include tools to bring recruitment on your desk. You can engage the best talents or locate candidates as per your business need, or just contact our team of experts for a decisive response. Hassle free recruitment with best results is what we promise.

Being a global platform our area of operations covers major countries around the world with our group of professionals, who aces and clutches year of experience to understand client’s requirements and carry precise solutions along with suggesting what is the best.
       </p>
       <h2>What makes EVEREST Global Solutions better?</h2>
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
       <img src={software1} alt="Team collaboration" />
     </div>
   </div>
   </section>
   </>
   );
 };

export default TechnologyRecruiting