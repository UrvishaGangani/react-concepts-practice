import React from 'react'
import Navbar from './Navbar';
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

export default function Header() {

    return (
      <header className="bg-gray-400 py-4 text-white mb-10">
        <div className="container mx-auto flex items-center justify-between px-4">
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="h-10 w-55 object-contain" />
          </div>
          <Navbar />
          <div className="flex items-center gap-4">
            <Link
              to="/login"
              className="px-4 py-2 bg-white text-gray-700 rounded-lg hover:bg-gray-200"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-700"
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>
    );
}
