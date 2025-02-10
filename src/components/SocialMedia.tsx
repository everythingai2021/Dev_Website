import React from "react";
import { Box, IconButton, IconButtonProps } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import SchoolIcon from "@mui/icons-material/School";
import HomeIcon from "@mui/icons-material/Home";

const SocialMediaLinks: React.FC = () => {
  return (
    <Box sx={{ display: "flex", gap: "0.5rem" }}>
      {[
        {
          href: "https://www.linkedin.com/company/everything-ai-coding-association/",
          icon: <LinkedInIcon />,
          color: "default" as IconButtonProps['color'],
        },
        {
          href: "https://www.youtube.com/channel/UCe_UvdY56qF7Q3B9AKfzQsQ",
          icon: <YouTubeIcon />,
          color: "default" as IconButtonProps['color'],
        },
        {
          href: "https://www.facebook.com/profile.php?id=61562120125882",
          icon: <FacebookIcon />,
          color: "default" as IconButtonProps['color'],
        },
        {
          href: "https://x.com/EverthingAICode",
          icon: <TwitterIcon />,
          color: "default" as IconButtonProps['color'],
        },
        {
          href: "https://www.instagram.com/_everything_ai/?hl=en",
          icon: <InstagramIcon />,
          color: "default" as IconButtonProps['color'],
        },
        {
          href: "https://campus.everythingai.ca/",
          icon: <SchoolIcon />,
          color: "warning" as IconButtonProps['color'],
        },
        {
          href: "https://everythingai.ca/",
          icon: <HomeIcon />,
          color: "success" as IconButtonProps['color'],
        },
      ].map((item, index) => (
        <IconButton
          key={index}
          component="a"
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          color={item.color}
          sx={{
            transition: "background-color 0.3s ease",
            "&:hover": {
              backgroundColor: "white",
              borderRadius: "50%",
            },
          }}
        >
          {item.icon}
        </IconButton>
      ))}
    </Box>
  );
};

export default SocialMediaLinks;
