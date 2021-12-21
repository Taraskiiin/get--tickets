import React from 'react';

import { NavLink } from '../styles/Logo';

import logo from '../assets/Logo.png';

const Logo = () => {
  return (
    <NavLink href="#">
      <img src={`${logo}`} alt="logo" />
    </NavLink>
  );
};

export default Logo;
