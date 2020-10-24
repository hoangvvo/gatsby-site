import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';

export default function Footer() {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            fullName
            twitter {
              username
            }
            github {
              username
            }
            linkedin {
              username
            }
          }
        }
      }
    `
  );

  return (
    <footer className="text-accents-600 w-full px-6 py-16 text-center">
      <p>
        Made with{' '}
        <span role="img" aria-label="Love">
          ❤️
        </span>
        ,{' '}
        <span role="img" aria-label="Fire">
          🔥
        </span>
        , and a{' '}
        <span role="img" aria-label="Keyboard">
          ⌨️
        </span>
      </p>
      <div>
        <a
          href={`https://twitter.com/${site.siteMetadata.twitter.username}`}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accents-700"
        >
          Twitter
        </a>
        {' · '}
        <a
          href={`https://github.com/${site.siteMetadata.github.username}`}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accents-700"
        >
          Github
        </a>
        {' · '}
        <a
          href={`https://linkedin.com/in/${site.siteMetadata.linkedin.username}`}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accents-700"
        >
          LinkedIn
        </a>
      </div>
      <small>
        © 2017 <Link to="/">{site.siteMetadata.fullName}</Link>
      </small>
    </footer>
  );
}
