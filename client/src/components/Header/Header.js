import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Link to='/'>SuperHero App</Link>
      <Link to='/favourites'>Favourites</Link>
    </div>
  );
};

export default Header;
