// src/components/Navbar.tsx
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const token = useSelector((state: any) => state.auth.token);

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-lg font-bold">
          Home
        </Link>
        <div className="space-x-4">
          {token ? (
            <>
              <Link to="/add-blog" className="text-white">
                Create blog
              </Link>
              <button className="text-white">Logout</button>
            </>
          ) : (
            <>
              <Link to="/login" className="text-white">
                Login
              </Link>
              <Link to="/signup" className="text-white">
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
