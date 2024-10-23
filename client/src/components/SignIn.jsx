import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Card, CardContent, Typography, Box } from '@mui/material';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/auth/signin', {
                email,
                password,
            });
            console.log(response.data);
            // You can store the token in localStorage or state management for future requests
        } catch (error) {
            console.error("There was an error signing in!", error);
        }
    };

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '100vh',
                backgroundColor: '#f5f5f5',
                padding: 2,
            }}
        >
            <Card sx={{ width: { xs: '90%', sm: '1250px' }, padding: 4, boxShadow: 3, borderRadius: 2 }}>
                <CardContent>
                    <Typography variant="h4" align="center" gutterBottom>
                        Sign In
                    </Typography>
                    <Typography variant="body2" color="textSecondary" align="center" gutterBottom>
                        Enter your credentials to access your account.
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            fullWidth
                            label="Email"
                            type="email"
                            variant="outlined"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            margin="normal"
                            required
                        />
                        <TextField
                            fullWidth
                            label="Password"
                            type="password"
                            variant="outlined"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            margin="normal"
                            required
                        />
                        <Button
                            fullWidth
                            type="submit"
                            variant="contained"
                            color="primary"
                            sx={{ mt: 2, py: 1 }}
                        >
                            Sign In
                        </Button>
                    </form>
                    <Typography align="center" variant="body2" color="textSecondary" sx={{ mt: 2 }}>
                        Don't have an account?{' '}
                        <a href="/signup" style={{ color: '#1976d2', textDecoration: 'none' }}>
                            Sign up
                        </a>
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    );
};

export default SignIn;
