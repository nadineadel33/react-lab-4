import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';

const HelpCenter = () => {
  return (
    <div>
      <h2>Help Center</h2>
      <nav>
        <NavLink to="faq">FAQ</NavLink> | 
        <NavLink to="contact">Contact Us</NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default HelpCenter;
