import React from "react";
import { Link } from "react-router-dom";
import { Container } from "reactstrap";
import "./Header.css";

const Header = () => {
  return (
    <header className='header p-2'>
      <Container className='d-flex justify-content-between  p-3 border border-white mb-2 '>
        <Link to='/' className='link'>
          SuperHero App
        </Link>
        <Link to='/favourites' className='link'>
          Favourites
        </Link>
      </Container>
    </header>
  );
};

export default Header;
