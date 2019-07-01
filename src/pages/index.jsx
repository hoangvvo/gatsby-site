import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

import mathematicsSvg from '../images/undraw_mathematics_4otb.svg';
import startupLifeSvg from '../images/undraw_startup_life_2du2.svg';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section className="hero is-medium">
      <div className="hero-body">
        <div className="container">
          <div className="columns">
            <div className="column is-8">
              <h1 className="title is-1 hv-intro-title">
                I am a
                {' '}
                <b className="hv-animate-underline">curious learner</b>
                , a
                {' '}
                <b className="hv-animate-underline">practical thinker</b>
                , a
                {' '}
                <b className="hv-animate-underline">tech-savvy person</b>
                , and a
                {' '}
                <b className="hv-animate-underline">good friend</b>
                .
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="section is-family-code">
      <div className="container">
        <h3 className="title hv-section-title hv-animate-text-stroke">My...</h3>
        <div className="columns">
          <Link style={{ backgroundColor: '#3F51B5' }} className="column is-4 has-text-centered hv-section-card" to="/about">
            <h3 className="title hv-animate-text-stroke">Self</h3>
            <img src={mathematicsSvg} alt="Portfolio" />
          </Link>
          <Link style={{ backgroundColor: '#673AB7' }} className="column is-4 has-text-centered hv-section-card" to="/portfolio">
            <h3 className="title hv-animate-text-stroke">Portfolio</h3>
            <img src={startupLifeSvg} alt="Portfolio" />
          </Link>
        </div>

      </div>
    </section>
  </Layout>
);

export default IndexPage;
