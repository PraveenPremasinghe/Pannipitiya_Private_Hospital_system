import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from "./Pages/Home";
import Patient from "./Pages/Patient";
import Doctor from "./Pages/Doctor";
import Staff from "./Pages/Staff";
import Appointments from "./Pages/Appointments";
import Login from "./Pages/Login";
import Signin from "./Pages/Signin";




function App() {
  return (
    <Router>
    <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/Signin" element={<Signin />} />
    <Route path="/home" element={<Home />} />
      <Route path="/Patient" element={<Patient />} />
      <Route path="/Doctor" element={<Doctor />} />
      <Route path="/Staff" element={<Staff />} />
      <Route path="/Appointments" element={<Appointments />} />
    







    </Routes>
  </Router>
  );
}




export default App;
