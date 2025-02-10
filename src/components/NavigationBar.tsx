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
  List,
  ListItem,
  ListItemText,
  Collapse,
  Popper,
  Paper,
  ClickAwayListener,
  Grid,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/EverythingAI (1).svg";
import SocialMediaLinks from "./SocialMedia";

interface NavItemProps {
  to?: string;
  primary: string;
  children?: React.ReactNode;
  isMobile: boolean;
  onClose?: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ to, primary, children, isMobile, onClose }) => {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const navigate = useNavigate();

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    if (children) {
      setOpen(!open);
      if (!isMobile) {
        setAnchorEl(anchorEl ? null : event.currentTarget);
      }
    } else if (to) {
      navigate(to);
      if (isMobile && onClose) {
        onClose();
      }
    }
  };

  const handleClose = () => {
    setOpen(false);
    setAnchorEl(null);
  };

  const content = (
    <Button
      component={to ? RouterLink : "button"}
      to={to}
      onClick={handleClick}
      endIcon={children ? (open ? <ExpandLess /> : <ExpandMore />) : null}
      sx={{
        color: "inherit",
        fontWeight: "bold",
        fontSize: "0.875rem",
        textTransform: "none",
        "&:hover": {
          backgroundColor: "#C9E4E9",
          color: "Green",
          borderBlockWidth:4,
          borderWidth:4,
          borderBlockColor:"red",
          borderColor:"black"
        },
      }}
    >
      {primary}
    </Button>
  );

  if (isMobile) {
    return (
      <>
        <ListItem button onClick={handleClick}>
          <ListItemText primary={primary} />
          {children && (open ? <ExpandLess /> : <ExpandMore />)}
        </ListItem>
        {children && (
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {children}
            </List>
          </Collapse>
        )}
      </>
    );
  }

  return (
    <>
      {content}
      {children && !isMobile && (
        <Popper 
          open={Boolean(anchorEl)} 
          anchorEl={anchorEl} 
          placement="bottom-start" 
          style={{ color: "red" , backgroundColor: "white" , width: '40%', left: '0!important', maxWidth: '100%', zIndex: 1300 }}
        >
          <ClickAwayListener onClickAway={handleClose}>
            <Paper elevation={3} sx={{ width: '100%', mt: 1, backgroundColor: '#C9E4E9' }}>
              <Box sx={{ p: 2 }}>
                <Grid container spacing={2}>
                  {React.Children.map(children, (child, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                      {child}
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Paper>
          </ClickAwayListener>
        </Popper>
      )}
    </>
  );
};

const NavigationBar: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width:960px)");
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const toggleDrawer = (open: boolean) => (event?: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event &&
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" ||
        (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const navItems = [
    { to: "/whoweare", primary: "Who We Are" },
    { to: "/events", primary: "Events" },
    {
      primary: "Projects",
      children: [
        { to: "/project-2020", primary: "2020 Project Section" },
        { to: "/project-2022", primary: "2022 Project Section" },
      ],
    },
    { to: "/program", primary: "Program" },
    { to: "/careers", primary: "Careers" },
    {
      primary: "Sandbox - Compiler",
      children: [
        {to: "/Sandbox", primary: "All Compiler" },
        { to: "/Sandbox1", primary: "OneCompiler" },
        { to: "/Sandbox2", primary: "Programiz" },
        { to: "/Sandbox3", primary: "Online Python Bata" },
      ],
    },
    { to: "/Contact", primary: "Contact" },
  ];

  const renderNavItems = (items: typeof navItems) => (
    items.map((item, index) => (
      <NavItem 
        key={index} 
        to={item.to} 
        primary={item.primary} 
        isMobile={isMobile}
        onClose={toggleDrawer(false)}
      >
        {item.children && renderNavItems(item.children)}
      </NavItem>
    ))
  );

  return (
    <AppBar
      position="sticky"
      sx={{
        background: "linear-gradient( #7ED957, #0097B2, #FFFFFF)",
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
            <Drawer
              anchor="right"
              open={drawerOpen}
             
              sx={{
                ".MuiDrawer-paper": {
                  width: "280px",
                  backgroundColor: "#0097B2",
                  color: "#FFFFFF",
                },
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  paddingTop: "1rem",
                }}
                role="presentation"
              >
                <List>
                  {renderNavItems(navItems)}
                </List>
                <Box sx={{ padding: "1rem" }}>
                  <SocialMediaLinks />
                </Box>
              </Box>
            </Drawer>
          </>
        ) : (
          <Box sx={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
            {renderNavItems(navItems)}
            <SocialMediaLinks />
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default NavigationBar;