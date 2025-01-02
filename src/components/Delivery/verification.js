import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Card, CardContent, Typography, TextField, Button, Box, CircularProgress } from '@mui/material';
import { useLocation } from 'react-router-dom';




const OtpVerification = () => {
const location= useLocation();
console.log(location);
  const { billNumber } = useParams();
//   const [order, setOrder] = useState(null);
const order = location.state?.order;
console.log(order)
  const [otp, setOtp] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');



//   When OTP is submitted, calling api to verify Otp
  const handleOtpSubmit = async () => {
    setLoading(true);
    try {
      const response = await axios.post(`http://127.0.0.1:8000/admin/verify_otp/${otp}/${billNumber}`);
      if (response.data.success) {
        alert('OTP verified successfully!');
      } else {
        setError('Invalid OTP. Please try again.');
      }
    } catch (error) {
      console.error('Error verifying OTP:', error);
      setError('Failed to verify OTP. Please try again.');
    } finally {
      setLoading(false);
    }
  };

//   if required to resend the otp
  const handleResendOtp = async () => {
    try {
      await axios.post(`http://127.0.0.1:8000/admin/resend_otp/${billNumber}`);
      alert('OTP resent successfully!');
    } catch (error) {
      console.error('Error resending OTP:', error);
      setError('Failed to resend OTP. Please try again.');
    }
  };

  if (!order) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box  sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        padding: '16px',
      }}>
      <Card sx={{ maxWidth: '400px', width: '100%' }}>
        <CardContent>
        <Typography
            variant="h7"
            component="div"
            sx={{ fontWeight: 'bold', marginBottom: '16px', textAlign: 'center' }}
          >
            Bill # {order.billNumber}
          </Typography>
          {/* Customer Name */}
          <Typography variant="h5" component="div" sx={{ fontWeight: 'bold', marginBottom: '16px' }}>
            {order.customerName}
          </Typography>

          {/* Address */}
          <Typography variant="body1" sx={{ marginBottom: '16px' }}>
            {order.address}
          </Typography>

          {/* Amount */}
          <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '24px' }}>
            ₹{order.amount}
          </Typography>

          {/* OTP Input */}
          <TextField
            fullWidth
            label="Enter OTP"
            variant="outlined"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            sx={{ marginBottom: '16px' }}
          />

          {/* Verify OTP Button */}
          <Button
            fullWidth
            variant="contained"
            onClick={handleOtpSubmit}
            disabled={loading}
            sx={{ marginBottom: '16px', backgroundColor: '#003366', '&:hover': { backgroundColor: '#002244' } }}
          >
            {loading ? <CircularProgress size={24} /> : 'Verify OTP'}
          </Button>

          {/* Resend OTP Option */}
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="body2" sx={{ marginBottom: '8px' }}>
              Didn't receive the OTP?
            </Typography>
            <Button
              variant="text"
              onClick={handleResendOtp}
              sx={{ color: '#003366', textTransform: 'none' }}
            >
              Resend OTP
            </Button>
          </Box>

          {/* Error Message */}
          {error && (
            <Typography variant="body2" color="error" sx={{ marginTop: '16px', textAlign: 'center' }}>
              {error}
            </Typography>
          )}
        </CardContent>
      </Card>
    </Box>
  );
};

export default OtpVerification;