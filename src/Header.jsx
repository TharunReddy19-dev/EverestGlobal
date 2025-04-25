import React from "react";
/* import TopContactBar from "./components/Tocontractbar/ToContractBar"; */
/* import MainNavbar from "./components/MainNavbar"; */

import Home from "./pages/home/home";
import AboutUs from "./pages/aboutUs/AboutUs";
import { Route, Routes } from "react-router-dom";
import Industries from "./pages/Industrial/Industries";
import Services from "./pages/services/Services";
import Careers from "./pages/careers/Careers";
import Contract from "./pages/contract/Contract";
/* import SoftwareDevelopment from "./pages/home/SoftwareDevelopment"; */
import TechnologyRecruiting from "./pages/home/TechnologyRecruiting";
import Outsourcing from "./pages/home/Outsourcing";
import SoftwareDevelopers from "./pages/careers/SoftwareDevelopers";
import SoftwareDevelopment from "./pages/home/SoftwareDevelopment";
import ComputerSystems from "./pages/careers/ComputerSystems";
import ComputerNdInfromation from "./pages/careers/ComputerNdInfromation";
import NotFound from "./components/NotFound";

const Header = () => {
  return (
    <div>
      <Routes>
     {/*  <TopContactBar /> */}
      {/*    <Home/> */}
      {/*    <AboutUs/> */}
      <Route path="/" element={<Home />} />
       <Route path= "/homes" element={ <Home/>}/>
       <Route path="/homes/software-development" element={<SoftwareDevelopment/>}/>
       <Route path="/homes/technologyRecruiting" element={<TechnologyRecruiting/>}/>
       <Route path="/homes/Outsourcing" element={<Outsourcing/>}/>
       <Route path= "/about" element={<AboutUs/>}/>
       <Route path="/industries" element={<Industries/>}/>
       <Route path="/services" element={<Services/>}/>
       <Route path="/careers" element={<Careers/>}/>
       <Route path="/careers/software-developer" element={<SoftwareDevelopers/>}/>
       <Route path="/careers/computerSys-eng-aecti" element={<ComputerSystems/>}/>
       <Route path="/careers/comp&Info-System-Mang" element={<ComputerNdInfromation/>}/>

       <Route path="/contact" element={<Contract/>}/>

       <Route path="*" element={<NotFound/>} />
 
       
    </Routes>

    </div>
  );
};

export default Header;