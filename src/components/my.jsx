import React from 'react';
import { Link } from 'gatsby';

import mathematicsSvg from '../images/undraw_mathematics_4otb.svg';
import startupLifeSvg from '../images/undraw_startup_life_2du2.svg';

const My = () => (
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
);

export default My;
