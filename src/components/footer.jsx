import { Link } from 'gatsby';
import React from 'react';

const Footer = () => (
  <footer className="text-accents-600 container mx-auto py-16 text-center">
      <p>
        Made with
        {' '}
        <span role="img" aria-label="Love">
          ❤️
        </span>
        ,
        {' '}
        <span role="img" aria-label="Fire">
          🔥
        </span>
        , and a keyboard.
      </p>
      <small>
        © 2017
        {' '}
        <Link to="/">Hoang Vo</Link>
      </small>
  </footer>
);

export default Footer;
