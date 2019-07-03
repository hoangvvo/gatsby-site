import { Link } from 'gatsby';
import React from 'react';

import './style.scss';

const Footer = () => (
  <footer className="footer has-background-transparent has-text-grey-lighter">
    <div className="content has-text-centered">
      <p>
        Proudly powered by
        {' '}
        <a href="https://www.gatsbyjs.org/" target="_blank" rel="noreferrer noopener">GatsbyJS</a>
        {' '}
and
        {' '}
        <a href="https://bulma.io/" target="_blank" rel="noreferrer noopener">BulmaCSS</a>
. Designed and coded with ❤ by
        {' '}
        <Link to="/">Hoang Vo</Link>
.
      </p>
    </div>
  </footer>
);

export default Footer;
