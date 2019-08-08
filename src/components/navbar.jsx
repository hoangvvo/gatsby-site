import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import hoangvvoLogo from '../images/hoangvvo-logo.png';

const Navbar = ({ siteTitle }) => (
  <nav
    className="navbar hv-navbar is-spaced has-background-transparent"
    role="navigation"
    aria-label="main navigation"
  >
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <img src={hoangvvoLogo} alt={siteTitle} height="32" />
        </Link>
        <div
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </div>
      </div>
    </div>
  </nav>
);

Navbar.propTypes = {
  siteTitle: PropTypes.string,
};

Navbar.defaultProps = {
  siteTitle: '',
};

export default Navbar;
