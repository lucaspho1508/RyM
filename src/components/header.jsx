import React from "react";
import { Link } from "react-router-dom";

const Header = () => {

  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light py-3 mb-5">
      <Link to="/" className="flex-1" style={{textDecoration:'none'}}>
        <h1>
          Rick and Morty Challenge
        </h1>
      </Link>
    </nav>
  );
};

export default Header;
