import React from "react";
import { BrowserRouter as Router, Routes, Route,Redirect } from "react-router-dom";
import Home from "./Page/Home";

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/" element={<Home />} />
    </Routes>
  </Router>
  );
}

export default App;
