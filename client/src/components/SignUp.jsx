import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Card, CardContent, Typography, Box } from '@mui/material';

const SignUp = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/auth/signup', {
                username,
                email,
                phone,
                password,
            });
            console.log(response.data);
        } catch (error) {
            console.error("There was an error signing up!", error);
        }
    };

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '100vh', // Full height for vertical centering
                backgroundColor: '#f5f5f5',
                padding: 2, // Optional padding for small screens
            }}
        >
            <Card sx={{ width: { xs: '90%', sm: '1250px' }, padding: 4, boxShadow: 3, borderRadius: 2 }}>
                <CardContent>
                    <Typography variant="h4" align="center" gutterBottom>
                        Create Account
                    </Typography>
                    <Typography variant="body2" color="textSecondary" align="center" gutterBottom>
                        Fill in the form to sign up for an account.
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            fullWidth
                            label="Username"
                            variant="outlined"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            margin="normal"
                            required
                        />
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
                            label="Phone"
                            type="tel"
                            variant="outlined"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
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
                            Sign Up
                        </Button>
                    </form>
                    <Typography align="center" variant="body2" color="textSecondary" sx={{ mt: 2 }}>
                        Already have an account?{' '}
                        <a href="/signin" style={{ color: '#1976d2', textDecoration: 'none' }}>
                            Sign in
                        </a>
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    );
};

export default SignUp;
