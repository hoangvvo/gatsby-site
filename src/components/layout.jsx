import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Navbar from './navbar';
import Footer from './footer';
import '../assets/styles/index.css';

const NewSiteBanner = () => {
  const [isHidden, setIsHidden] = React.useState(false);
  const pathname =
    typeof window !== 'undefined' ? window.location.pathname : '';
  if (!process.env.NEW_SITE_URL) return null;
  return (
    <div
      className="fixed bottom-0 w-full left-0 p-2 rounded-t-lg text-sm"
      style={{
        background: 'linear-gradient(120deg,#fa709a, #ffc107)',
      }}
      hidden={isHidden}
    >
      <p className="leading-tight mb-2">
        You are visiting the previous version of this website.
      </p>
      <p className="leading-none">
        <a
          href={`${process.env.NEW_SITE_URL}${pathname}`}
          className="bg-foreground hover:bg-accents-800 rounded-full px-2 py-1 font-bold"
          style={{ color: 'var(--secondary)' }}
        >
          Move to the new site
        </a>{' '}
        <button
          className="inline ml-1 px-2 py-1 text-foreground hover:text-accents-800"
          type="button"
          onClick={() => setIsHidden(true)}
        >
          Hide me
        </button>
      </p>
    </div>
  );
};

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
      <NewSiteBanner />
      <Footer siteTitle={data.site.siteMetadata.title} />
    </>
  );
}
