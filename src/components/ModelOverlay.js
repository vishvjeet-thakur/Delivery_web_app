import React, { useContext, useState } from 'react';
import { Modal, Box, Typography, Button } from '@mui/material';
import { LoginForm, SignupForm } from './Authentication';
import { AuthContext } from './AuthContext';
import { useNavigate } from 'react-router-dom';


// This is to make overlay in case
const ModalOverlay = ({  }) => {
  const [showLoginForm, setShowLoginForm] = useState(true);
  const {isAuthenticated,login} =useContext(AuthContext);
  const navigate = useNavigate();

  const handleLoginClick = () => {
    setShowLoginForm(true);
  };

  const handleSignupClick = () => {
    setShowLoginForm(false);
  };

  if(isAuthenticated){ return null}

  const onClose=()=>{
    navigate('/user')
  }

  return (
    <Modal
    open={!isAuthenticated}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: { xs: '90%', sm: '450px' },
          bgcolor: 'background.paper',
          boxShadow: 24,
          borderRadius: 2,
          p: 3,
        }}
      >
        <Typography
          id="modal-title"
          variant="h6"
          component="h2"
          align="center"
          gutterBottom
        >
          Login or Signup
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
          <Button variant="contained" onClick={handleLoginClick} sx={{ width: "48%" }}>
            Login
          </Button>
          <Button variant="contained" onClick={handleSignupClick} sx={{ width: "48%" }}>
            Signup
          </Button>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {showLoginForm ? <LoginForm /> : <SignupForm />}
        </Box>
        <Box sx={{ mt: 2, textAlign: "center" }}>
          <Button variant="contained" onClick={onClose} >
            Close
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default ModalOverlay;