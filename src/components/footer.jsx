import { Link } from 'gatsby';
import React from 'react';

import './style.scss';

const Footer = () => (
  <footer className="footer has-background-transparent has-text-grey-lighter">
    <div className="content has-text-centered">
      <p>
        Proudly powered by
        {' '}
        <a href="https://www.gatsbyjs.org/">GatsbyJS</a>
        {' '}
and
        {' '}
        <a href="https://bulma.io/">BulmaCSS</a>
. Designed and coded with ❤ by
        {' '}
        <Link to="/">Hoang Vo</Link>
.
      </p>
    </div>
  </footer>
);

export default Footer;
