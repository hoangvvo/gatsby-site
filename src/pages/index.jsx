import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

import My from '../components/my';

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
    <My />
  </Layout>
);

export default IndexPage;
