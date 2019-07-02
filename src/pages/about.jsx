/* eslint-disable max-len */
import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

import My from '../components/my';

const AboutPage = () => (
  <Layout>
    <SEO title="About" description="My name is Hoang Vo. I have been working on various projects to polish my skills in Computer Programming, Graphic Design, Video Production, Photography, Leadership as well as taking part in community activities." />
    <section className="section hv-mt-3">
      <div className="container">
        <h1 className="title hv-section-title hv-animate-text-stroke">About me</h1>
        <p className="hv-section-subtitle-hashtags">
          <span>#me</span>
          ,
          {' '}
          <span>#myself</span>
          ,
          {' '}
          <span>#I</span>
        </p>
        <div className="columns">
          <div className="column is-8">
            <div className="content hv-about-content">
              <h2 className="subtitle is-2">My name is Hoang Vo</h2>
              <p>I have been working on various projects to polish my skills in Computer Programming, Graphic Design, Video Production, Photography, Leadership as well as taking part in community activities.</p>
              <p>
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
                . Currently a high school senior, I’m on my way to explore myself.
              </p>
              <blockquote>
                <p>“Sometimes life’s going to hit you in the head with a brick. Don’t lose faith. I’m convinced that the only thing that kept me going was that I loved what I did.”</p>
                <cite>Steve Jobs</cite>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
    <My />
  </Layout>
);

export default AboutPage;
