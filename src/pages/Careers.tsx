import React from "react";
import EachFuc from "../components/Eachpage";
import CareerPage from '../components/Career';
import Page from "../assets/careerimg.jpg";
import Sponsor from "../components/ourSponsor";
import MetaData from "../components/Metadata";
const jobs = [
    {
        title: 'Volunteer opportunity ',
        description: 'We also offer Volunteering Opportunities as well Volunteer with us and help the community Grow a Nerd.',
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
