import React from 'react'
import "../Industrial/Industries.css"
/* import Industrie from '../../assets/images/Industrial.jpg' */
import MainNavbar from '../../components/MainNavbar'


const Industries = () => {

 return (
  <>
  <MainNavbar/>
  <section>

  <div className="leadership_banner-ind">
    <div className="container">
        {/* <div class="h6">MEET APEXON</div> */}
        <h1 className="h1">Industries</h1>
        <div className="text">
         <p>   EVEREST Global Solutions Inc is a global service company offering gamut of Recruitment, Outsourcing and Software services. Headquartered in Florida, USA we endow with solutions various businesses around the world that includes keys industries like Health Care, Insurance, Pharma, Finance, Telecom and Technology.</p>
         <p>We represent Efficient Work, Talent and skills. Our aim is to offer high class services to our clients by connecting them with professionals around the world talking benefit from vast knowledge over technology spectrum.</p>
        <p>
        Our range of solutions is applicable to various industries. Along with this we also offer customized solutions as per industry requirement. For example, Technology Recruitment that covers the area of finding well qualified professionals with expertise and valuable experience in the niche.
        </p>
        <p>
        We are also adhered to our assurance for quality by appointing certified professionals with well rounded experience in their field along with qualification to ascertain their capability of delivering results. Employed professionals are further trained to stay updated with the current market scenarios.
        </p>


        </div>
    </div>
      </div>


  </section>
  <section className="hero-section-ind">
    <div className="content-box-ind">
      <h1>
      Industrial Sectors
       
      </h1>
      <p>
        Our services and solutions are structured with an aim to boost efficiency and stay cost-effective at the same time. We can also tailored solutions according to the current requirement of different business. So our industrial sector section show cases the area where our services and solutions are applicable.
        
       <p> Starting from the Tech Industry, to Retail, Pharma, Health, Insurance, finance, Telecom, etc, we had covered a global platform already. Due to our experienced way of approaching solutions for any task, allow us to stay updated and innovate new path to deliver results in less time.</p>
        
        <p>So if you are searching for a professional recruitment solutions, or finding up a global platform to outsource your business operations then we are at your services. You can approach us anytime with your queries via our contact us page, our team expert will assist you.</p>
      </p>
    </div>
  </section>
  </>
);
}

export default Industries