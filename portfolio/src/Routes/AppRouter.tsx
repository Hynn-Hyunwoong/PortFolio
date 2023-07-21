import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/about" element={<div>About</div>} />
        <Route path="/nondev" element={<div>Non-Dev</div>} />
        <Route path="/dev" element={<div>Dev</div>} />
        <Route path="/project" element={<div>Contact</div>} />
        <Route path="/contact" element={<div>Contact</div>} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
