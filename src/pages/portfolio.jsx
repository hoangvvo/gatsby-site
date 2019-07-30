/* eslint-disable react/prop-types */
import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/layout';
import SEO from '../components/seo';
import My from '../components/my';

const PortfolioPage = ({ data }) => {
  const portfolioItems = data.allContentfulPortfolio.edges;
  return (
    <Layout>
      <SEO
        title="Portfolio"
        description="I have been enjoying working on different projects during the past years to polish my skills in different fields. Check out my work!"
      />
      <section className="section hv-mt-3">
        <div className="container">
          <h1 className="title hv-section-title hv-animate-text-stroke">
            Portfolio
          </h1>
          <p className="hv-section-subtitle-hashtags">
            <span>#project</span>
            ,
            {' '}
            <span>
              #creative
              <span role="img" aria-label="Star">
                ⭐
              </span>
            </span>
            ,
            {' '}
            <span>
              #lit
              <span role="img" aria-label="Fire">
                🔥
              </span>
            </span>
          </p>
          <div className="hv-section-portfolio hv-mt-3">
            {portfolioItems.map(({ node: item }) => (
              <div className="columns hv-section-portfolio-item">
                <div className="column is-4">
                  <Img fluid={item.image.fluid} alt={item.title} />
                </div>
                <div className="column is-8 content">
                  <h4
                    className="title hv-portfolio-title is-1"
                    style={{ color: item.color }}
                  >
                    {item.name}
                  </h4>
                  <p className="hv-portfolio-desc">
                    {item.description.description}
                  </p>
                  <a
                    href={item.link}
                    style={{ backgroundColor: item.color }}
                    className="button is-fullwidth is-rounded is-primary"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    {item.linkTitle}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <My />
    </Layout>
  );
};

export default PortfolioPage;

export const query = graphql`
  query PortfolioQuery {
    allContentfulPortfolio {
      edges {
        node {
          id
          name
          slug
          color
          description {
            description
          }
          image {
            fluid(maxWidth: 768) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
          category
          link
          linkTitle
        }
      }
    }
  }
`;
