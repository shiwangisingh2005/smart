import React, { useState, useEffect } from 'react';
import { Container, Grid, Card, CardContent, Typography, Box, List, ListItem, ListItemText } from '@mui/material';
import PercentageCircle from './PercentageCircle'; // Adjust the path as needed

const Dashboard = () => {
    const [studentsEnrolledPercentage, setStudentsEnrolledPercentage] = useState(0);
    const [resourcesAccessedPercentage, setResourcesAccessedPercentage] = useState(0);
    const [mostAccessedResources, setMostAccessedResources] = useState([]);

    // Simulate fetching data
    useEffect(() => {
        // Example data fetching logic (replace with your API call)
        const fetchData = async () => {
            // Example fetched data (replace with API response data)
            const fetchedData = {
                studentsEnrolled: 75,
                resourcesAccessed: 45,
                accessedResources: [
                    { name: "Resource 1", count: 120 },
                    { name: "Resource 2", count: 95 },
                    { name: "Resource 3", count: 80 },
                ],
            };

            setStudentsEnrolledPercentage(fetchedData.studentsEnrolled);
            setResourcesAccessedPercentage(fetchedData.resourcesAccessed);
            setMostAccessedResources(fetchedData.accessedResources);
        };

        fetchData();
    }, []);

    return (
        <Container maxWidth="lg" style={{ marginTop: '20px' }}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={6}>
                    <Card>
                        <CardContent style={{ display: 'flex', alignItems: 'center' }}>
                            <Box flex={1}>
                                <Typography variant="h6">Students Enrolled</Typography>
                            </Box>
                            <Box>
                                <PercentageCircle value={studentsEnrolledPercentage} />
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                    <Card>
                        <CardContent style={{ display: 'flex', alignItems: 'center' }}>
                            <Box flex={1}>
                                <Typography variant="h6">Resources Accessed</Typography>
                            </Box>
                            <Box>
                                <PercentageCircle value={resourcesAccessedPercentage} />
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>
                                Most Accessed Resources
                            </Typography>
                            <List>
                                {mostAccessedResources.map((resource, index) => (
                                    <ListItem key={index}>
                                        <ListItemText primary={resource.name} secondary={`Access Count: ${resource.count}`} />
                                    </ListItem>
                                ))}
                            </List>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Dashboard;
