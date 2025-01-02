import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Box, Typography, Paper } from '@mui/material';
import { AuthContext } from './AuthContext';
import { useContext } from 'react';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const {_,login,logout} = useContext(AuthContext);

//   Not added any authentication yet, just UI for demo 
  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/');
  };

//   const Login=async()=>{
//     try{
//         const response = await fetch('');
//         if(response.ok){
//             localStorage.setItem("userAuth","success");
//             login();
//         }
//         else{
//             localStorage.setItem("userAuth","failure")
//             logout();
//         }
//     }
//     catch(error){
//         localStorage.setItem("userAuth","failure")
//   }
// }

  return (
    <Paper
      elevation={3}
      sx={{
        padding: 3,
        maxWidth: 400,
        width: { xs: '85%', sm: '80%', md: '70%', lg: '60%' },
        margin: 'auto',
        marginTop: 4,    
      }}
    >
      <Typography variant="h5" component="h1" align="center" gutterBottom>
        Login
      </Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <TextField
          label="Email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          fullWidth
          required
        />
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          fullWidth
          required
        />
        <Button
          type="submit"
          variant="contained"
          fullWidth
          sx={{ mt: 2 }}
        //   onClick={Login()}
        >
          Login
        </Button >
      </Box>
    </Paper>
  );
};


const SignupForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Authentication logic here
    navigate('/');
  };
  const Signup=async()=>{
    try{
        const response = await fetch('');
        console.log('signed up successfuly')
        }
    catch(error){
        console.log(error)
  }
}

  return (
    <Paper
      elevation={3}
      sx={{
        padding: 3,
        maxWidth: 400,
        width: { xs: '85%', sm: '80%', md: '70%', lg: '60%' },
        margin: 'auto',
        marginTop: 4,
    
      }}
    >
      <Typography variant="h5" component="h1" align="center" gutterBottom>
        Signup
      </Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <TextField
          label="Email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          fullWidth
          required
        />
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          fullWidth
          required
        />
        <Button
          type="submit"
          variant="contained"
          fullWidth
          sx={{ mt: 2 }}
        >
          Signup
        </Button>
      </Box>
    </Paper>
  );
};

  
  

export{LoginForm,SignupForm};