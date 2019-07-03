import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

import notFoundSvg from '../images/undraw_page_not_found_su7k.svg';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <section className="hero is-medium has-background-black-bis">
      <div className="hero-body has-text-centered">
        <div className="container">
          <img alt="Not found" src={notFoundSvg} style={{ maxWidth: '100%', maxHeight: '40vh', marginBottom: '2rem' }} />
          <h1 className="title">
          404 NOT FOUND
          </h1>
          <h2 className="subtitle">
            This page does not exist... just like my girlfriend.
          </h2>
          <Link to="/">Go back</Link>
        </div>
      </div>
    </section>
  </Layout>
);

export default NotFoundPage;
