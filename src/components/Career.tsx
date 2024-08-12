import React, { useState } from 'react';
import {
    Container,
    Typography,
    Grid,
    TextField,
    Button,
    Card,
    CardContent,
    CardActions,
    Box,
} from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

interface CareerPageProps {
    jobs: { title: string; description: string }[];
}

const CareerPage: React.FC<CareerPageProps> = ({ jobs }) => {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const navigate = useNavigate(); // Initialize useNavigate

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const filteredJobs = jobs.filter((job) =>
        job.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <Container>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', py: 4 }}>
                <TextField
                    fullWidth
                    variant="outlined"
                    label="Search Jobs"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    sx={{ width: { xs: '90%', sm: '70%', md: '50%' }, marginBottom: 2 }}
                />
                <Grid container spacing={3} justifyContent="center">
                    {filteredJobs.map((job, index) => (
                        <Grid key={index} item xs={12} md={6}>
                            <Card sx={{ height: '100%' }}>
                                <CardContent>
                                    <Typography variant="h5" component="div">
                                        {job.title}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        {job.description}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" color="primary" onClick={() => navigate('/volounteer')}>
                                        Apply Now
                                    </Button>
                                    {/* Additional action buttons or links */}
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Container>
    );
};

export default CareerPage;
