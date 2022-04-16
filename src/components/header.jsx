import React from "react";
import { Link } from "react-router-dom";

const Header = (setPageNumber) => {

  const firstPage = () => {
    setPageNumber(1)
  }

  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light py-3 mb-5 ">
      <Link to="/" className="flex-1 mx-auto" onClick={firstPage} style={{textDecoration:'none'}}>
        <h1>
          Rick and Morty Challenge
        </h1>
      </Link>
    </nav>

  );
};

export default Header;
