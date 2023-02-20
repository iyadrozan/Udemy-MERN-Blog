import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full top-0 flex items-center justify-between flex-wrap bg-white shadow p-6 fixed">
      <div className="container mx-auto">
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <Link to="/" className="text-gray font-bold text-xl">
            Example Blog
          </Link>
          <div className="text-lg lg:flex-grow text-right">
            <ul>
              <li className="inline-block py-4">
                <Link to="/" className="pl-6 pr-8 text-gray">
                  Home
                </Link>
              </li>
              <li className="inline-block py-4">
                <Link to="/about" className="pl-6 pr-8 text-gray">
                  About
                </Link>
              </li>
              <li className="inline-block py-4">
                <Link to="/articles-list" className="pl-6 pr-8 text-gray">
                  Article
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
