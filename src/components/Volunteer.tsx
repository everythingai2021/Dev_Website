import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

const Volunteer: React.FC = () => {
    const navigate = useNavigate(); // Initialize useNavigate

    return (
        <Container maxWidth="md" sx={{ mt: 4 }}>
            <Typography variant="h4" component="h1" gutterBottom>
                Volunteer Opportunities
            </Typography>
            
            <Box sx={{ my: 4, textAlign: 'center' }}>
                <object 
                    data="https://main.everythingai.ca/wp-content/uploads/2024/08/Volunteer-Tasks.pdf" 
                    type="application/pdf" 
                    width="100%" 
                    height="700px">
                    <Typography variant="body1">
                        Your browser does not support PDFs. 
                        <a href="https://main.everythingai.ca/wp-content/uploads/2024/08/Volunteer-Tasks.pdf" target="_blank" rel="noopener noreferrer">
                            Download the PDF
                        </a>.
                    </Typography>
                </object>
            </Box>

            <Box sx={{ mb: 5, textAlign: "center" }}>
                <iframe
                    src="https://docs.google.com/forms/d/e/1FAIpQLSe186B5VEQCEFBDqEQXYPGtpKnu4sNxVUOq3XbrDyPJTCg_Ig/viewform"
                    allowFullScreen
                    width="100%"
                    height="500px"
                    frameBorder="0"
                    title="Volunteer Application Form"
                    style={{ maxWidth: '100%' }}
                ></iframe>
            </Box>
        </Container>
    );
};

export default Volunteer;
