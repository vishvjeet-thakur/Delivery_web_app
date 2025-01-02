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
import { Divider,Box } from "@mui/material";
import { AuthProvider } from "../AuthContext";
import ModalOverlay from "../ModelOverlay";

const User = () => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }
    setDrawerOpen(open);
  };

  return (
    <AuthProvider>
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
            User App
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
          {[ "Orders", "Profile", "Complaint"].map((text, index) => (
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
    </>
    <ModalOverlay />
    </AuthProvider>
  );
};

export default User;
