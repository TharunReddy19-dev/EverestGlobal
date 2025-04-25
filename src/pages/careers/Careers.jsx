import React from 'react'
import '../careers/Careers.css'
import MainNavbar from '../../components/MainNavbar'
import careers from '../../assets/images/careers.jpg'
import careers2 from '../../assets/images/careers2.jpeg'
import careers3 from '../../assets/images/Architects.jpg'
import { useNavigate } from 'react-router-dom'

const Careers = () => {
  const navigate=useNavigate();
 const career = [
  {
    id: 1,
    image: careers,
    category: "SOFTWARE DEVELOPERS",
    title: "SOFTWARE DEVELOPERS, APPLICATIONS Miami, FL area. Plan & design architecture of web apps & portals. Write, code, implement, test & debug modules & programs. Travel/reloc to various unanticipated locations. Send res to: Everest Global Solutions, Inc., 8200 NW 41st St., Ste. 200, Miami, FL 33166.",
    path:"/careers/software-developer"
 
   
  },
  {
    id: 2,
    image: careers2,
    category: "COMPUTER AND INFORMATION SYSTEM MANAGERS",
    title: "Miami, FL area. Participate in all aspects of SDLC. Propose & deliver Managed File Transfer architecture design. Travel / relocate to various unanticipated locations as reqd. Send res to: Everest Global Solutions, Inc., 8200 NW 41st St., Ste. 200, Miami, FL 33166 OR Gupta@everestglobalsolutionsinc.com.",
     path:"/careers/comp&Info-System-Mang"
 
  },
  {
    id: 3,
    image: careers3,
    category: "COMPUTER SYSTEMS ENGINEERS/ARCHITECTS",
    title: "Miami, FL area. Lead team of Salesforce developers providing technical guidance, mentoring & code reviews. Design and architect Salesforce solutions. Travel / relocate to various unanticipated U.S. locs as reqd. Salary: $138,486 per year. Send res to: Everest Global Solutions, Inc., gupta@everestglobalsolutionsinc.com.",
    path:"/careers/computerSys-eng-aecti"
   
  },
];
  return (
   <>
   <MainNavbar/>
   <section>
    <div className='Careers'>
     <div><h1 className='careers-heading'>CAREERS</h1></div>
     <div className='careers-span'>
     <span>SOFTWARE DEVELOPERS & </span><br />
     <span>COMPUTER AND INFORMATION SYSTEM MANAGERS</span>
     <br/>
     <span>COMPUTER SYSTEMS ENGINEERS/ARCHITECTS</span>
     </div>
     </div>
   </section>
   <section className="articles-wrapper">
      <div className="articles-grid">
        {career.map((article) => (
          <div key={article.id} className="article-card">
            <img
              src={article.image}
              alt={article.title}
              className="article-image"
            />
            <div className="article-category">{article.category}</div>
            <h3 className="article-title">{article.title}</h3>

            <button className='read-more' onClick={() => navigate(article.path)}>Apply Now</button>
            
          </div>
        ))}
      </div>
    </section>
    </>
  )
}

export default Careers

//everything not upto