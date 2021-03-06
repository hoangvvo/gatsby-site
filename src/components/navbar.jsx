import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';

export default function Navbar() {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  );
  return (
    <nav
      role="navigation"
      aria-label="main navigation"
      className="fixed py-4 w-full z-40 px-6"
      style={{ backdropFilter: 'blur(2px)', backgroundColor: 'rgba(0,0,0,.4)' }}
    >
      <div className="container px-6 mx-auto flex flex-wrap justify-between items-center">
        <div className="flex content-start">
          <Link to="/">
            <div className="text-lg text-accents-700 opacity-75 hover:opacity-100 transition-opacity duration-100 ease-out">
              {site.siteMetadata.title}
            </div>
          </Link>
        </div>
        <div className="flex content-end">
          <Link
            className="text-2xl font-bold underline-bg theme-gradient opacity-75 hover:opacity-100 transition-opacity duration-100 ease-out"
            to="/blog"
          >
            Blog
          </Link>
          <Link
            className="ml-4 text-2xl font-bold underline-bg theme-gradient opacity-75 hover:opacity-100 transition-opacity duration-100 ease-out"
            to="/portfolio"
          >
            Portfolio
          </Link>
        </div>
      </div>
    </nav>
  );
}
