import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

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
                <b>curious learner</b>
, a
                {' '}
                <b>practical thinker</b>
, a
                {' '}
                <b>tech-savvy person</b>
, and a
                {' '}
                <b>good friend</b>
.
              </h1>
            </div>
            <div className="column is-4">
              Some text...
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
