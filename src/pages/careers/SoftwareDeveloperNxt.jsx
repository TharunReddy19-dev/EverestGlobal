import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../careers/Phase2.css';
import imgDeveloper from "../../assets/images/medium.jpg"
import imgAnalyst from "../../assets/images/people.jpg"
import imgcomp from "../../assets/images/look-this.jpg"

/* const dynamicContent = {
  "Software Developer": {
    image: imgDeveloper ,
    paragraphs: [
      `Everest Global Solutions, Inc. is actively hiring a Lead Oracle Fusion Cloud HCM Developer to spearhead a high-performing team of HCM developers. This role involves the design, architecture, and implementation of scalable, enterprise-grade Oracle Fusion Cloud HCM solutions across various modules including Core HR, Payroll, Talent Management, and Benefits.`,
      `You will be responsible for leading solution architecture discussions, providing technical mentorship, and ensuring seamless system integration aligned with business objectives. Ideal candidates must possess in-depth technical knowledge of Oracle HCM Cloud, strong problem-solving skills, and prior experience in leading development teams.`,
      `Candidates should be open to traveling or relocating to various unanticipated client sites across the United States as required by project demands.

📍 Location: Miami, FL area (Travel/relocate to unanticipated U.S. locations as required)

💰 Annual Salary: $149,781

📧 To Apply: Please send your resume to gupta@everestglobalsolutionsinc.com

`
    ]
  },
  "INFORMATION SYSTEM ANALYST": {
     image: imgAnalyst, 
    paragraphs: [
      `Everest Global Solutions, Inc. is currently seeking a talented and detail-oriented Information System Analyst to join our growing team. In this role, you will work closely with cross-functional teams to analyze, consolidate, and validate the enterprise application landscape using tools like LeanIX and other leading IT portfolio management platforms.`,
      `As an Information System Analyst, your key responsibilities will include identifying areas for system improvements, conducting detailed business process evaluations, and delivering actionable insights to enhance organizational efficiency. You will also support digital transformation initiatives and ensure data consistency across systems.`,
      `Some of your job duties can be performed remotely; however, you must be willing to travel or relocate to various unanticipated project locations across the United States as needed.

📍 Location: Miami, FL area (Travel/relocate to unanticipated U.S. locations as required)

💼 Annual Salary: $104,894

✉️ To Apply: Send your resume to gupta@everestglobalsolutionsinc.com

`
    ]
  },
  "COMPUTER SYSTEMS ENGINEER/ARCHITECT": {
   
    paragraphs: [
      `JEverest Global Solutions, Inc. is currently seeking a highly experienced Computer Systems Engineer/Architect to lead and guide a skilled team of Salesforce developers. In this pivotal role, you will be responsible for designing, architecting, and overseeing the implementation of robust Salesforce-based solutions tailored to meet complex business requirements.`,
      `Your day-to-day responsibilities will include offering technical guidance, conducting code reviews, mentoring team members, and ensuring alignment with industry best practices and security standards. The ideal candidate should have a solid background in Salesforce architecture, excellent leadership capabilities, and a passion for building scalable and maintainable solutions.`,
      `This role requires flexibility, as some job responsibilities may be performed remotely, while others may require travel or relocation to various unanticipated locations across the United States depending on client needs.

📍 Location: Miami, FL area (Travel/relocate to unanticipated U.S. locations as required)

💰 Annual Salary: $138,486

📧 To Apply: Send your resume to gupta@everestglobalsolutionsinc.com`
    ]
  }
};
 */
const dynamicContent = {
  "Software Developer": {
    image: imgDeveloper,
    details: {
      jobTitle: "Lead Oracle Fusion HCM Developer",
      modeOfWork: "On-site",
    experience: "12+ years",
    role: "Team Lead",
      location: "Miami, FL area (Travel/relocate to unanticipated U.S. locations as required)",
      Salary:"$149,781 per year",
      jobSummary: `We are seeking a skilled and experienced Lead Oracle Fusion HCM Developer to lead the design, development, and support of our Oracle Fusion HCM suite. The ideal candidate will have deep technical knowledge of Oracle Fusion HCM modules, hands-on experience with Fast Formula, HCM Extracts, HDL, and OTBI, and strong problem-solving skills. This role will collaborate with functional teams, business stakeholders, and other developers to ensure scalable and efficient HCM solutions are delivered.`,

      keyResponsibilities: [
        "Lead end-to-end technical development of Oracle Fusion HCM modules (Core HR, Absence, Payroll, Benefits, Talent, etc.)",
        "Design and implement customizations using HDL, HCM Extracts, Fast Formulas, OTBI, and REST APIs",
        "Work with functional leads to translate business requirements into technical solutions",
        "Mentor and guide developers, conduct code reviews, ensure best practices",
        "Develop integrations with third-party systems and maintain existing ones",
        "Troubleshoot production issues and support quarterly Oracle Cloud updates",
        "Maintain documentation for technical configurations and solutions"
      ],

      requiredQualifications: [
        "Bachelor's degree in Computer Science or related field",
        "6+ years in Oracle HCM Cloud/Fusion",
        "Expertise in HDL, HCM Extracts, OTBI, BI Publisher, SOAP/REST",
        "Experience in Core HR, Payroll, Benefits, or Absence",
        "Strong SQL and Oracle DB experience",
        "Understanding of HCM data models and security roles",
        "Strong communication and debugging skills"
      ],

      preferredQualifications: [
        "Oracle HCM Cloud Certification(s)",
        "Experience with Oracle Integration Cloud (OIC)",
        "Experience in multi-country/global rollouts",
        "Leadership experience in large-scale implementations"
      ],

      contact: "gupta@everestglobalsolutionsinc.com",
      salary: "$149,781 per year"
    }
  },

  "INFORMATION SYSTEM ANALYST": {
    image: imgAnalyst ,
    details: {
      jobTitle: "Information System Analyst",
      modeOfWork: "On-site",
    experience: "12+ years",
    role: "Team Lead",
      location: "Miami, FL area (Travel/relocate to unanticipated U.S. locations as required)",
      Salary:"$104,894 per year",
      jobSummary: `We are looking for a talented and detail-oriented Information System Analyst to join our IT team. The ideal candidate will be responsible for analyzing, consolidating, and validating the organization’s application landscape using LeanIX and other leading IT portfolio management platforms.

This role will support enterprise architecture and digital transformation initiatives by identifying redundancies, assessing system efficiencies, and delivering actionable insights for improvement. You will collaborate with cross-functional stakeholders and ensure data integrity across systems.`,

      keyResponsibilities: [
      " Analyze and validate the enterprise application landscape using LeanIX",

"Consolidate system information to identify redundancies and improvement areas",

"Work with stakeholders to document application capabilities and ownership",

"Support IT portfolio management and digital transformation programs",

"Ensure data consistency, accuracy, and compliance with internal policies",

"Assist in building system roadmaps and preparing business impact assessments",

"Provide support for software rationalization initiatives",

"Generate regular reports and dashboards for leadership",


      ],

     requiredQualifications: [
  "Bachelor’s degree in Information Systems, Computer Science, or related field",
  "Minimum of 4 years of experience in enterprise systems or business analysis",
  "Proficient in tools like LeanIX, Excel, and data visualization platforms",
  "Excellent analytical, documentation, and stakeholder communication skills",
  "Ability to manage multiple systems and data sources",
  "Strong understanding of IT governance and system lifecycle"
],

preferredQualifications: [
  "Experience with IT Portfolio Management tools like ServiceNow or Apptio",
  "Familiarity with Enterprise Architecture frameworks (e.g., TOGAF)",
  "Knowledge of digital transformation processes and cloud-based systems",
  "Agile/Hybrid project delivery experience"
],


      contact: "gupta@everestglobalsolutionsinc.com",
      salary: "$149,781 per year"
    }
  },

  "COMPUTER SYSTEMS ENGINEER/ARCHITECT": {
  image: imgcomp, // Replace with imgArchitect if available
  details: {
    jobTitle: "Computer Systems Engineer/Architect",
    role: "Technical Lead / Architect",
    experience: "12+ years",
    location: "Miami, FL area (Travel/relocate to various unanticipated U.S. locations as required)",
    modeOfWork: "On-site",
    salary: "$138,486 per year",

    jobSummary: `Everest Global Solutions, Inc. is seeking an experienced Computer Systems Engineer/Architect to lead and mentor a team of Salesforce developers. This role focuses on designing, architecting, and implementing enterprise-grade Salesforce solutions that align with strategic business objectives.

The ideal candidate will have a deep understanding of the Salesforce ecosystem, excellent leadership and technical skills, and the ability to manage complex projects across multiple teams.`,

    keyResponsibilities: [
      "Design scalable and secure Salesforce architecture solutions across various clouds (Sales, Service, Experience, etc.)",
      "Lead a team of Salesforce developers—providing mentorship, technical guidance, and performing code reviews",
      "Translate business requirements into well-architected solutions using best practices",
      "Define technical standards, enforce security and compliance, and ensure performance optimization",
      "Integrate Salesforce with third-party applications and internal systems using REST/SOAP APIs, middleware, or AppExchange solutions",
      "Collaborate with business stakeholders, product owners, and project managers to deliver high-impact solutions",
      "Maintain technical documentation, solution designs, and deployment plans",
      "Support system upgrades, patching, and platform evolution",
      "Stay current with Salesforce releases, platform innovations, and emerging architectural trends"
    ],

    requiredQualifications: [
      "Bachelor’s degree in Computer Science, Engineering, or related field",
      "8+ years of experience in enterprise system development and architecture",
      "5+ years of hands-on experience with Salesforce CRM and Platform development",
      "Strong expertise in Apex, Lightning Web Components (LWC), Visualforce, SOQL, and Salesforce configuration",
      "Experience with integration tools such as MuleSoft, Dell Boomi, or custom middleware",
      "Proficient in CI/CD practices and tools like Git, Jenkins, Salesforce DX",
      "Excellent problem-solving and system design skills",
      "Strong leadership and team mentoring capabilities",
      "Solid understanding of Agile methodologies"
    ],

    preferredQualifications: [
      "Salesforce Certified Technical Architect (CTA) or Application/Platform Architect certifications",
      "Experience working in large-scale enterprise implementations and multi-cloud environments",
      "Knowledge of enterprise architecture frameworks (e.g., TOGAF)",
      "Background in other CRM or ERP platforms (e.g., Microsoft Dynamics, Oracle)",
      "Experience with DevOps, automated testing, and release management in Salesforce"
    ],

    contact: "gupta@everestglobalsolutionsinc.com"
  }
}


  
};


const ButterflyScreen = ({ job, onFinish }) => {
  const navigate = useNavigate();
  const jobContent = dynamicContent[job.category] || {};
  const { image, details = {} } = jobContent;

  const handleApplyNow = () => {
    onFinish?.();
    navigate(job.path);
  };

  return (
    <div className="butterfly-overlay">
      <div className="butterfly-card">
        <div className="butterfly-left">
          <img src={image || job.image} alt={job.category} className="butterfly-image" />
        </div>
        <div className="butterfly-right">
          <div className="butterfly-text overflow-y-auto max-h-[90vh] pr-2">
            <h2 className="text-2xl font-bold mb-2">{details.jobTitle || job.category}</h2>
            <p><strong>Role:</strong> {details.role}</p>
             <p><strong> Experience:</strong> {details.experience}</p>
              <p><strong> Location:</strong> {details.location}</p>
      <p><strong> MadeOfWork:</strong> {details.modeOfWork}</p>
           
            
           
             {/* <p className="mb-2">{details.salary}</p> */}
             <p><strong> Salary:</strong> {details.Salary}</p>

            <hr className="my-4" />

            <p className="font-semibold">Job Summary:</p>
            <p className="mb-4 text-sm text-gray-700">{details.jobSummary}</p>

            <p className="font-semibold">Key Responsibilities:</p>
            <ul className="list-disc list-inside mb-4 text-sm text-gray-700">
              {details.keyResponsibilities?.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>

            <p className="font-semibold">Required Qualifications:</p>
            <ul className="list-disc list-inside mb-4 text-sm text-gray-700">
              {details.requiredQualifications?.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>

            {details.preferredQualifications?.length > 0 && (
              <>
                <p className="font-semibold">Preferred Qualifications:</p>
                <ul className="list-disc list-inside mb-4 text-sm text-gray-700">
                  {details.preferredQualifications.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </>
            )}

            {/* <p className="font-semibold">💰 Salary:</p> */}
           {/*  <p className="mb-2">{details.salary}</p> */}

            <p className="font-semibold">✉️ To Apply:</p>
            <p className="mb-4">{details.contact}</p>

            <button className="apply-now-button mt-2" onClick={handleApplyNow}>
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ButterflyScreen;
