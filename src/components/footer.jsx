import { Link } from 'gatsby';
import React from 'react';

const Footer = () => (
  <footer className="footer has-background-transparent">
    <div className="content has-text-centered">
      <p className="is-italic">
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
    </div>
  </footer>
);

export default Footer;
