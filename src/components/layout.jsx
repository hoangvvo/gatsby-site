import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Navbar from './navbar';
import Footer from './footer';
import '../assets/styles/index.css';

export default function Layout({ children }) {
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
      <main className="max-w-full overflow-y-auto">{children}</main>
      <Footer siteTitle={data.site.siteMetadata.title} />
    </>
  );
}
