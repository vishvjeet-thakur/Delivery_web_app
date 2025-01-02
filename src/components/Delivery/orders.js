import React from 'react';
import { Card, CardContent, Typography, Box,Button,Link } from '@mui/material';
import { styled } from '@mui/system';
import { useNavigate } from 'react-router-dom';

// Styled Card
const StyledCard = styled(Card)(({ theme }) => ({
 backgroundColor: '#FFFFFF',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  padding: '20px', // Increased padding for larger card size
  margin: '10px',
  color: '#333333',
 // Ensure card takes full width
  maxWidth: '400px'
}));


// This is for order card which will show the different attributes of orders
const OrderCard = ({ order }) => {
  const { customerName, address, amount, timeLeft ,billNumber} = order;  
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/order/${billNumber}`,{state:{order}});
  }

  return (
 

    <Link style={{ textDecoration: 'none' }} state={{order}} onClick={(e) => handleNavigate()}>
    <StyledCard>
      <CardContent>
      {/* Top section - Showing Customer Name and bill number */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '8px',
          }}
        >
        <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
          {customerName}
        </Typography>
        <Typography variant="h7" color="text.secondary" fontSize={15} sx={{fontWeight:'bold'}}>
        {billNumber}
          </Typography>
         </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start', // Align items to the top
            marginBottom: '16px',
          }}
        >
          {/* Address */}
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              flex: 1, // Take up remaining space
              wordWrap: 'break-word', // Wrap address within the given space
              marginRight: '16px',
              maxWidth: 'calc(100% - 100px)'
               // Add spacing between address and amount
            }}
          >
            {address}
          </Typography>

          {/* Amount */}
          <Typography
            variant="h5"
            sx={{
              fontWeight: 'bold',
              whiteSpace: 'nowrap',
              marginRight:'14px'
            //   marginBlockEnd:'3px' // Prevent amount from wrapping
            }}
          >
            ₹{amount}
          </Typography>
        </Box>

        {/* Bottom Section: Timer and Contact Button */}
        {/* Bottom Section: Timer and Contact Button */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end', // Align items to the bottom
          }}
        >
          {/* Timer */}
          <Typography variant="body2" color="text.secondary" fontSize={20}>
            {timeLeft} mins
          </Typography>

          {/* Contact Button */}
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#003366',
              color: '#FFFFFF',
              borderRadius: '4px',
              textTransform: 'none',
              '&:hover': {
                backgroundColor: '#002244',
              },
            }}
            onClick={(e) => {
                e.stopPropagation(); 
              }}
          >
            Contact
            {/* <Link to={`/order/${billNumber}`} style={{ textDecoration: 'none' }} onClick={(e) => e.preventDefault()}/> */}
          </Button>
        </Box>
      </CardContent>
    </StyledCard>
    </Link>
  );

};

export default OrderCard;