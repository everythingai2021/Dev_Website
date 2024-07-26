import React from "react";
import EachFuc from "../components/Eachpage";
import CareerPage from '../components/Career';
import Page from "../assets/careerimg.jpg";
import Sponsor from "../components/ourSponsor";
import MetaData from "../components/Metadata";
const jobs = [
    {
        title: 'Frontend Developer',
        description: 'Join our team as a frontend developer and work on exciting projects.',
    },
    {
        title: 'UX Designer',
        description: 'We are looking for a talented UX designer to improve our user experience.',
    },
    // Add more job objects as needed
];


const CareersPage: React.FC = () => {
  return (
    <div>
    <MetaData title="Career | SandBox" description="Welcome to EverythingAI Home" />
  
    {/* Add your home page content here */}

      <EachFuc
      Title=" Career "
      image={Page}
     />
      <CareerPage jobs={jobs} />
      
      <Sponsor />
    </div>
  
  );
};

export default CareersPage;
