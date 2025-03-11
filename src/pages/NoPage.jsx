import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';

const NoPage = () => {
    return (
        <Container maxWidth="sm">
            <Box
                sx={{
                    height: '100vh',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                }}
            >
                <Typography variant="h1" component="div" gutterBottom>
                    404
                </Typography>
                <Typography variant="h5" component="div" gutterBottom>
                    Сторінку не знайдено
                </Typography>
                <Typography variant="body1" gutterBottom>
                    Вибачте, але запитувана сторінка не існує.
                </Typography>
                <Button variant="contained" color="primary" component={Link} to="/">
                    Повернутись на головну
                </Button>
            </Box>
        </Container>
    );
};

export default NoPage;
