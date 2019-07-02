import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

import My from '../components/my';
import luvScriptStudioSquare from '../images/luvscriptstudio_square.jpg';

const PortfolioPage = () => (
  <Layout>
    <SEO title="Portfolio" description="I have been enjoying working on different projects during the past years to polish my skills in different fields. Check out my work!" />
    <section className="section hv-mt-3">
      <div className="container">
        <h1 className="title hv-section-title hv-animate-text-stroke">Portfolio</h1>
        <p className="hv-section-subtitle-hashtags">
          <span>#project</span>
          ,
          {' '}
          <span>
            #creative
            <span role="img" aria-label="Star">⭐</span>
          </span>
          ,
          {' '}
          <span>
            #lit
            <span role="img" aria-label="Fire">🔥</span>
          </span>
        </p>
        <div className="hv-section-portfolio">
          <div className="columns hv-section-portfolio-item">
            <div className="column is-4">
              <img src={luvScriptStudioSquare} className="" alt="LuvScript Studio" />
            </div>
            <div className="column is-8 content">
              <h4 className="title hv-portfolio-title is-1 has-text-danger">LuvScript Studio</h4>
              <p className="has-text-grey-light hv-portfolio-desc">Determined to create helpful tiny bits to tackle the biggest complications. For the community. For ever.</p>
              <a href="https://www.facebook.com/luvscript.studio/" className="button is-danger is-fullwidth is-rounded">Go and love</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <My />
  </Layout>
);

export default PortfolioPage;
