import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Divider,Box ,Link } from "@mui/material";
import OrderCard from "./orders";
import axios from "axios";
import { useState,useEffect } from "react";

const Delivery = () => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }
    setDrawerOpen(open);
  };

//   const orders = [
//     { customerName: 'John Doe', address: '123 Main St, City, Country', amount: 6000, timeLeft: 45 ,billNumber:12345},
//     { customerName: 'Jane Smith', address: '456 Elm St, City, Country', amount: 300, timeLeft: 15,billNumber:23443535 },
//     { customerName: 'Alice Johnson', address: '789 Oak St, City, Country', amount: 700, timeLeft: 5,billNumber:23443535 },
//   ];

  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/orders/orders_demo/delivered'); // Replace with your API endpoint
        const transformedOrders = response.data.map((order) => {
          const timeLeft = new Date(order.timeLeft).toDateString;
          console.log(timeLeft) // Convert timeLeft to Date object
          return {
            ...order,
            timeLeft: timeLeft, 
          };
        });

        setOrders(transformedOrders);
      } catch (error) {
        console.error(error);
      }
    };

    fetchOrders();
    console.log(orders)
  }, []);

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Admin
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)} PaperProps={{
    sx: {
      width: 300, // Set the width of the drawer's paper
    },
  }}>
    <Box sx={{ padding: '16px', backgroundColor: '#1976d2', color: '#fff' }}>
    <Typography variant="h6" component="div">
      My App
    </Typography>
  </Box>
        <List>
          {["Dashboard", "Orders", "Delivery Boys", "Users", "Admin"].map((text, index) => (
            <div key={text}>
            <ListItem button
            sx={{
                '&:hover': {
                  background: 'linear-gradient(90deg, #e0e0e0,rgb(152, 177, 232))', // Gradient background
                  transition: 'background 0.3s ease', // Smooth transition
                },
              }}
            
            >
              <ListItemText primary={text} />
            </ListItem>
            {index<4 && <Divider/>}
            </div>
          ))}
        </List>
      </Drawer>
      <Box sx={{ padding: '16px' }}>
            {orders.map((order, index) => (
              <OrderCard key={index} order={order}  />
            ))}
          </Box>
      
    </>
  );
};

export default Delivery;
