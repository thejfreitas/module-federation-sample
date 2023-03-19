import React from 'react';
import { Link } from 'react-router-dom';
import { StyledHeader } from './styles';

const Header = () => {
  return (
    <StyledHeader>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/cart">Cart</Link>
    </StyledHeader>
  );
};

export default Header;
