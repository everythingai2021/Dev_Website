import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  useMediaQuery,
  Drawer,
  Button,
  Menu,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Link as RouterLink, useLocation } from "react-router-dom";
import logo from "../assets/EverythingAI (1).svg";
import SocialMediaLinks from "./SocialMedia";

interface NavButtonProps {
  to?: string;
  primary: string;
  hasDropdown?: boolean;
  onMouseEnter?: (event: React.MouseEvent<HTMLElement>) => void;
  onClick?: () => void;
}

const NavButton: React.FC<NavButtonProps> = ({
  to,
  primary,
  hasDropdown,
  onMouseEnter,
  onClick,
}) => (
  <Button
    component={to ? RouterLink : "button"}
    to={to}
    sx={{
      color: "#FFFFFF",
      fontWeight: "bold",
      fontSize: "0.875rem",
      textTransform: "none",
      "&:hover": {
        backgroundColor: "#C9E4E9",
        color: "black",
      },
    }}
    onMouseEnter={hasDropdown ? onMouseEnter : undefined}
    onClick={onClick}
    endIcon={hasDropdown ? <KeyboardArrowDownIcon /> : null}
  >
    {primary}
  </Button>
);

interface NavButtonsProps {
  onMouseEnter?: (event: React.MouseEvent<HTMLElement>) => void;
  onSandboxHover?: (event: React.MouseEvent<HTMLElement>) => void;
}

const NavButtons: React.FC<NavButtonsProps> = ({ onMouseEnter, onSandboxHover }) => (
  <>
    <SocialMediaLinks />
    
    <NavButton to="/whoweare" primary="Who We Are" />
    <NavButton to="/events" primary="Events" />
    <NavButton to="/project" primary="Projects" hasDropdown onMouseEnter={onMouseEnter} />
    <NavButton to="/program" primary="Program" />
    <NavButton to="/careers" primary="Careers" />
    <NavButton primary="Sandbox - Compiler" hasDropdown onMouseEnter={onSandboxHover} />
    <NavButton to="/Contact" primary="Contact" />
  </>
);

const NavigationBar: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [servicesAnchorEl, setServicesAnchorEl] = useState<null | HTMLElement>(null);
  const [sandboxAnchorEl, setSandboxAnchorEl] = useState<null | HTMLElement>(null);
  const isMobile = useMediaQuery("(max-width:600px)");
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const toggleDrawer =
    (open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent): void => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setDrawerOpen(open);
    };

  const handleServicesHover = (event: React.MouseEvent<HTMLElement>): void => {
    if (!isMobile) {
      setServicesAnchorEl(event.currentTarget);
    }
  };

  const handleSandboxHover = (event: React.MouseEvent<HTMLElement>): void => {
    if (!isMobile) {
      setSandboxAnchorEl(event.currentTarget);
    }
  };

  const handleMenuClose = (): void => {
    setServicesAnchorEl(null);
    setSandboxAnchorEl(null);
  };

  const renderMenu = (anchorEl: HTMLElement | null, menuItems: { to: string; text: string }[]) => (
    <Menu
      anchorEl={anchorEl}
      open={Boolean(anchorEl)}
      onClose={handleMenuClose}
      MenuListProps={{ onMouseLeave: handleMenuClose }}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
    >
      {menuItems.map(({ to, text }) => (
        <MenuItem
          key={to}
          component={RouterLink}
          to={to}
          onClick={handleMenuClose}
          sx={{
            color: "green",
            fontWeight: "bold",
            fontSize: "1rem",
            textTransform: "none",
            "&:hover": {
              backgroundColor: "#C9E4E9",
            },
          }}
        >
          {text}
        </MenuItem>
      ))}
    </Menu>
  );

  return (
    <AppBar
      position="sticky"
      sx={{
        background: "linear-gradient(45deg, #FFFFFF, #FFFFFF, #AAB0AA, #0097B2)",
        color: "#FFFFFF",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between", padding: "0 20px" }}>
        <Typography variant="h4" component="div" sx={{ display: "flex", alignItems: "center" }}>
          <RouterLink to="/">
            <img src={logo} alt="Logo" style={{ height: "80px", margin: "6px" }} />
          </RouterLink>
        </Typography>
        {isMobile ? (
          <>
            <IconButton color="inherit" aria-label="menu" onClick={toggleDrawer(true)} edge="end">
              <MenuIcon />
            </IconButton>
            <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
              <Box
                sx={{
                  width: 250,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  paddingTop: "1rem",
                  marginTop: "28px",
                  backgroundColor: "lightgreen",
                }}
                role="presentation"
                onClick={toggleDrawer(false)}
                onKeyDown={toggleDrawer(false)}
              >
                <NavButtons onMouseEnter={handleServicesHover} onSandboxHover={handleSandboxHover} />
               
              </Box>
            </Drawer>
          </>
        ) : (
          <Box sx={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <NavButtons onMouseEnter={handleServicesHover} onSandboxHover={handleSandboxHover} />
          
          </Box>
        )}
      </Toolbar>
      {renderMenu(servicesAnchorEl, [
        { to: "/project-2020", text: "2020 Project Section" },
        { to: "/project-2022", text: "2022 Project Section" },
      ])}
      {renderMenu(sandboxAnchorEl, [
        { to: "/Sandbox1", text: "OneCompiler" },
        { to: "/Sandbox2", text: "Programiz" },
        { to: "/Sandbox3", text: "Online Python Bata" },
      ])}
    </AppBar>
  );
};

export default NavigationBar;
