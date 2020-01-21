import { Link } from 'gatsby';
import React from 'react';

export default function Footer() {
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
          href="https://www.instagram.com/hoangvvo/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accents-700"
        >
          Instagram
        </a>
        {' · '}
        <a
          href="https://twitter.com/hoangvvo"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accents-700"
        >
          Twitter
        </a>
        {' · '}
        <a
          href="https://github.com/hoangvvo"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accents-700"
        >
          Github
        </a>
        {' · '}
        <a
          href="https://linkedin.com/in/hoangvvo"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accents-700"
        >
          LinkedIn
        </a>
      </div>
      <small>
        © 2017 <Link to="/">Hoang Vo</Link>
      </small>
    </footer>
  );
}
