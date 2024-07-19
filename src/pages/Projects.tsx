import React from "react";
import SectionPage from "../components/ServicePage";
import Sponsor from "../components/ourSponsor";
import { Container } from "@mui/material";
import ContactSection from "../components/contactpage";
import Page from "../assets/goalsimg.jpg";

const ProjectsPage: React.FC = () => {
  return (
    <>
     <Container>
        <SectionPage
          title= "Service 1"
          description= "Description of Service 1"
          image= {Page}
          link= {"/about"}
        />

      <SectionPage
          title= "Service 1"
          description= "Description of Service 1"
          image= {Page}
          link= {"/about"}
        />
     </Container> 

      <Sponsor />
      <ContactSection />
    </>
   
  );
};

export default ProjectsPage;
