import React, { useState } from "react";
import { Button } from "@mui/material";
import ContactForm from "./ContactForm";
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
const ContactButton: React.FC = () => {
  const [showContactForm, setShowContactForm] = useState(false);

  const handleClose = () => setShowContactForm(false);
  const handleShow = () => setShowContactForm(true);

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        onClick={handleShow}
      >
        <ConnectWithoutContactIcon/>
      </Button>
    
      <ContactForm open={showContactForm} handleClose={handleClose} />
    </>
  );
};

export default ContactButton;
