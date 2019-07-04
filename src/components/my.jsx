import React from 'react';
import { Link } from 'gatsby';

import mathematicsSvg from '../images/undraw_mathematics_4otb.svg';
import startupLifeSvg from '../images/undraw_startup_life_2du2.svg';
import contentCreatorSvg from '../images/undraw_content_creator_xeju.svg';

const My = () => (
  <section className="section is-family-code">
    <div className="container">
      <h3 className="title hv-section-title hv-animate-text-stroke">My...</h3>
      <div className="columns is-multiline">
        <Link style={{ backgroundColor: '#3F51B5' }} className="column is-6-tablet is-4-desktop has-text-centered hv-section-card" to="/about/">
          <h3 className="title hv-animate-text-stroke">Self</h3>
          <img src={mathematicsSvg} alt="About me" />
        </Link>
        <Link style={{ backgroundColor: '#673AB7' }} className="column is-6-tablet is-4-desktop has-text-centered hv-section-card" to="/portfolio/">
          <h3 className="title hv-animate-text-stroke">Portfolio</h3>
          <img src={startupLifeSvg} alt="Portfolio" />
        </Link>
        <Link style={{ backgroundColor: '#009688' }} className="column is-6-tablet is-4-desktop has-text-centered hv-section-card" to="/blog/">
          <h3 className="title hv-animate-text-stroke">Blog</h3>
          <img src={contentCreatorSvg} alt="Blog" />
        </Link>
      </div>
    </div>
  </section>
);

export default My;
