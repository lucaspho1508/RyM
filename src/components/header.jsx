import React from "react";
import { Link } from "react-router-dom";

const Header = () => {

  return (
    <header className="flex flex-row items-center h-24 px-5 bg-teal-600">
      <Link to="/" className="flex-1">
        <h1 className="text-3xl font-Helvetica text-center text-white">
          Rick and Morty Challenge
        </h1>
      </Link>
    </header>
  );
};

export default Header;
