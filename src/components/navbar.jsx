import { Link } from 'gatsby';
import React from 'react';

const Navbar = () => (
  <nav
    role="navigation"
    aria-label="main navigation"
    className="fixed py-12 w-full z-40 h-20 p-2"
    style={{
      backdropFilter: 'blur(2px)'
    }}
  >
    <div className="container mx-auto flex justify-between items-center">
      <div className="flex content-start">
        <Link to="/">
          <div className="text-lg text-accents-700 opacity-75 hover:opacity-100 transition-opacity duration-100 ease-out">
            <span className="font-light">Hoang V.</span>{' '}
            <span className="font-bold">Vo</span>
          </div>
        </Link>
      </div>
      <div className="flex content-end">
        <Link
          className="text-2xl font-bold underline-bg theme-gradient opacity-75 hover:opacity-100 transition-opacity duration-100 ease-out"
          to="/blog/"
        >
          Blog
        </Link>
        <Link
          className="ml-2 text-2xl font-bold underline-bg theme-gradient opacity-75 hover:opacity-100 transition-opacity duration-100 ease-out"
          to="/portfolio/"
        >
          Portfolio
        </Link>
      </div>
    </div>
  </nav>
);

export default Navbar;
