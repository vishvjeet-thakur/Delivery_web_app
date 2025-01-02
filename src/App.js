import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import User from "./components/User/UserLayout";
import Admin from "./components/Admin/AdminLayout";
import Delivery from "./components/Delivery/DeliveryLayout";
import OtpVerification from "./components/Delivery/verification";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/order/:billNumber" element={<OtpVerification/>} />
        <Route path="/user/*" element={<User />}/>
        <Route path="/admin/*" element={<Admin />}/>
        <Route path="/delivery/*" element={<Delivery />}/>
      </Routes>
    </Router>
  );
}

export default App;
