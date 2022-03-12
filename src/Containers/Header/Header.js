import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-dark text-white shadow">
      <div className="container py-3 d-flex align-items-center">
        <h1 className="text-primary">Olx</h1>
        <nav className="d-flex ms-5">
          <Link to="/" className="me-5 text-decoration-none">
            Home
          </Link>
          <Link to="/categories" className="text-decoration-none">
            Categies
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
