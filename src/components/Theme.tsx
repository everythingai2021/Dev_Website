import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Merriweather, Montserrat, Arial, sans-serif", // Updated font family for a more modern feel
    h4: {
      fontWeight: 800,
      fontSize: "2.5rem",
    },
    h6: {
      fontWeight: 600,
      fontSize: "1.2rem",
    },
    body1: {
      fontWeight: 600,
      fontSize: "1rem",
    },
    button: {
      textTransform: "none",
      fontWeight: 800,
      fontSize: "1rem",
    },
  },
  palette: {
    primary: {
      main: "#247B27", // Primary color remains green
    },
    secondary: {
      main: "#4CAF50", // Secondary color remains a shade of green
    },
    background: {
      default: "#f0f0f0", // Light gray background for a clean look
    },
    text: {
      primary: "#333", // Dark text color for better readability
      secondary: "#666", // Lighter secondary text color
    },
    // Additional customizations as per your futuristic style preferences
    // You can add more specific palette colors or adjust existing ones here
  },
  shape: {
    borderRadius: 8, // Rounded corners for a softer, more modern appearance
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 20, // Rounded buttons for a modern touch
        },
        containedPrimary: {
          backgroundColor: "#247B27", // Primary button color
          color: "#fff", // White text for contrast
          "&:hover": {
            backgroundColor: "#1e6f21", // Darker green on hover
          },
        },
        containedSecondary: {
          backgroundColor: "#4CAF50", // Secondary button color
          color: "#fff", // White text for contrast
          "&:hover": {
            backgroundColor: "#399141", // Darker shade of green on hover
          },
        },
      },
    },
  },
});

export default theme;
