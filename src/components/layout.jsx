import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Navbar from './navbar';
import Footer from './footer';
import '../assets/styles/index.css';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Navbar siteTitle={data.site.siteMetadata.title} />
      <main>{children}</main>
      <Footer siteTitle={data.site.siteMetadata.title} />
    </>
  );
};

export default Layout;
