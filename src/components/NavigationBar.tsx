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
import ContactButton from "./ContactButton";

interface NavButtonProps {
  to: string;
  primary: string;
  hasDropdown?: boolean;
  onMouseEnter?: (event: React.MouseEvent<HTMLElement>) => void;
}

const NavButton: React.FC<NavButtonProps> = ({
  to,
  primary,
  hasDropdown,
  onMouseEnter,
}) => (
  <Button
    component={RouterLink}
    to={to}
    sx={{
      color: "#247B27",
      fontWeight: "bold",
      fontSize: "1rem",
      textTransform: "none",
      "&:hover": {
        backgroundColor: "#fffbf1",
        color: "black",
      },
    }}
    onMouseEnter={hasDropdown ? onMouseEnter : undefined}
    endIcon={hasDropdown ? <KeyboardArrowDownIcon /> : null}
  >
    {primary}
  </Button>
);

interface NavButtonsProps {
  onMouseEnter?: (event: React.MouseEvent<HTMLElement>) => void;
}

const NavButtons: React.FC<NavButtonsProps> = ({ onMouseEnter }) => (
  <>
    <NavButton to="/" primary="Home" />
    <NavButton to="/whoweare" primary="Who We Are" />
    <NavButton to="/events" primary="Events" />
    <NavButton to="/project" primary="Projects" hasDropdown onMouseEnter={onMouseEnter} />
    <NavButton to="/program" primary="Program" />
    <NavButton to="/careers" primary="Careers" />
    <NavButton to="/Sandbox" primary="Sandbox - Compiler " />
    <NavButton to="/Contact" primary="Contact" />
  </>
);

const NavigationBar: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [servicesAnchorEl, setServicesAnchorEl] = useState<null | HTMLElement>(null);
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

  const handleServicesClose = (): void => {
    setServicesAnchorEl(null);
  };

  return (
    <AppBar position="sticky" sx={{ backgroundColor: "#fff", color: "#247B27" }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography variant="h4" component="div" sx={{ marginLeft: "10px" }}>
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
                }}
                role="presentation"
                onClick={toggleDrawer(false)}
                onKeyDown={toggleDrawer(false)}
              >
                <NavButtons onMouseEnter={handleServicesHover} />
                <ContactButton />
              </Box>
            </Drawer>
          </>
        ) : (
          <Box sx={{ display: "flex", alignItems: "center", gap: "1.5rem", marginRight: "20px" }}>
            <NavButtons onMouseEnter={handleServicesHover} />
            <ContactButton />
          </Box>
        )}
      </Toolbar>
      <Menu
        anchorEl={servicesAnchorEl}
        open={Boolean(servicesAnchorEl)}
        onClose={handleServicesClose}
        MenuListProps={{ onMouseLeave: handleServicesClose }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuItem
          component={RouterLink}
          to="/project-2020"
          onClick={handleServicesClose}
          sx={{
            color: "#247B27",
            fontWeight: "bold",
            fontSize: "1rem",
            textTransform: "none",
            "&:hover": {
              backgroundColor: "rgba(36, 123, 39, 0.08)",
            },
          }}
        >
          2020 Project Section
        </MenuItem>
        <MenuItem
          component={RouterLink}
          to="/project-2022"
          onClick={handleServicesClose}
          sx={{
            color: "#247B27",
            fontWeight: "bold",
            fontSize: "1rem",
            textTransform: "none",
            "&:hover": {
              backgroundColor: "rgba(36, 123, 39, 0.08)",
            },
          }}
        >
          2022 Project Section
        </MenuItem>
      </Menu>
    </AppBar>
  );
};

export default NavigationBar;
