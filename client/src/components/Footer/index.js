import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <footer>
      <h6>🧙‍♂️Built by Jon Pfluger, Jason Jones, Jennifer Kiesler, Christopher McLaughlin, and Megan Rakow🧙‍♀️</h6>
    </footer>
  );
};

export default Footer;
