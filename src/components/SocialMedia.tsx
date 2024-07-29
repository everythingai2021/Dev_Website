import React from "react";
import { Box, IconButton } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

import LanguageIcon from "@mui/icons-material/Language";

const SocialMediaLinks: React.FC = () => {
  return (
    <Box sx={{ display: "flex", gap: "0.5rem" }}>
      <IconButton
        component="a"
        href="https://www.linkedin.com/company/everything-ai-coding-association/"
        target="_blank"
        rel="noopener noreferrer"
        color="inherit"
      >
        <LinkedInIcon />
      </IconButton>
      <IconButton
        component="a"
        href="https://www.youtube.com/channel/UCe_UvdY56qF7Q3B9AKfzQsQ"
        target="_blank"
        rel="noopener noreferrer"
        color="inherit"
      >
        <YouTubeIcon />
      </IconButton>
      <IconButton
        component="a"
        href="https://www.facebook.com/profile.php?id=61562120125882"
        target="_blank"
        rel="noopener noreferrer"
        color="inherit"
      >
        <FacebookIcon />
      </IconButton>
      <IconButton
        component="a"
        href="https://x.com/EverthingAICode"
        target="_blank"
        rel="noopener noreferrer"
        color="inherit"
      >
        <TwitterIcon />
      </IconButton>
      <IconButton
        component="a"
        href="https://www.instagram.com/_everything_ai/?hl=en"
        target="_blank"
        rel="noopener noreferrer"
        color="inherit"
      >
        <InstagramIcon />
      </IconButton>
      <IconButton
        component="a"
        href="https://www.youtube.com/channel/UCe_UvdY56qF7Q3B9AKfzQsQ"
        target="_blank"
        rel="noopener noreferrer"
        color="inherit"
      >
       
      </IconButton>
      <IconButton
        component="a"
        href="https://campus.everythingai.ca/"
        target="_blank"
        rel="noopener noreferrer"
        color="warning"
      >
        <LanguageIcon />
      </IconButton>
      <IconButton
        component="a"
        href="https://everythingai.ca/"
        target="_blank"
        rel="noopener noreferrer"
        color="success"
      >
        <LanguageIcon />
      </IconButton>
    </Box>
  );
};

export default SocialMediaLinks;
