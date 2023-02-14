import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <footer>
      <p
        className=" px-3 py-4  text-white text-center"
        style={{ fontSize: 12 }}
      >
        🧙‍♂️Built by Jon Pfluger, Jason Jones, Jennifer Kiesler, Christopher
        McLaughlin, and Megan Rakow🧙‍♀️
      </p>
    </footer>
  );
};

export default Footer;
