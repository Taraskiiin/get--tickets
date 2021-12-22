import React from 'react';

import { NavLink } from '../styles/Logo';

const Logo = () => (
  <NavLink href="#">
    <img src={process.env.PUBLIC_URL + '/Logo.png'} alt="logo" />
  </NavLink>
);

export default Logo;
