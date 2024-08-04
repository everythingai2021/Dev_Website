import React from "react";
import { Box, IconButton } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import SchoolIcon from '@mui/icons-material/School';
import LanguageIcon from "@mui/icons-material/Language";
import HomeIcon from '@mui/icons-material/Home';
const SocialMediaLinks: React.FC = () => {
  return (
    <Box sx={{ display: "flex", gap: "0.5rem" }}>
      <IconButton
        component="a"
        href="https://www.linkedin.com/company/everything-ai-coding-association/"
        target="_blank"
        rel="noopener noreferrer"
        color="default"
      >
        <LinkedInIcon />
      </IconButton>
      <IconButton
        component="a"
        href="https://www.youtube.com/channel/UCe_UvdY56qF7Q3B9AKfzQsQ"
        target="_blank"
        rel="noopener noreferrer"
         color="default"
      >
        <YouTubeIcon />
      </IconButton>
      <IconButton
        component="a"
        href="https://www.facebook.com/profile.php?id=61562120125882"
        target="_blank"
        rel="noopener noreferrer"
         color="default"
      >
        <FacebookIcon />
      </IconButton>
      <IconButton
        component="a"
        href="https://x.com/EverthingAICode"
        target="_blank"
        rel="noopener noreferrer"
         color="default"
      >
        <TwitterIcon />
      </IconButton>
      <IconButton
        component="a"
        href="https://www.instagram.com/_everything_ai/?hl=en"
        target="_blank"
        rel="noopener noreferrer"
         color="default"
      >
        <InstagramIcon />
      </IconButton>
      <IconButton
        component="a"
        href="https://www.youtube.com/channel/UCe_UvdY56qF7Q3B9AKfzQsQ"
        target="_blank"
        rel="noopener noreferrer"
        color="default"
      >
       <YouTubeIcon/>
      </IconButton>
      <IconButton
        component="a"
        href="https://campus.everythingai.ca/"
        target="_blank"
        rel="noopener noreferrer"
        color="warning"
      >
        <SchoolIcon/>
      </IconButton>
      <IconButton
        component="a"
        href="https://everythingai.ca/"
        target="_blank"
        rel="noopener noreferrer"
        color="success"
      >
        <HomeIcon />
      </IconButton>
    </Box>
  );
};

export default SocialMediaLinks;
