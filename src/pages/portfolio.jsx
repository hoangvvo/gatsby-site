import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/layout';
import SEO from '../components/seo';

const PortfolioPage = ({ data }) => {
  const portfolioItems = data.allContentfulPortfolio.edges;
  return (
    <Layout>
      <SEO
        title="Portfolio"
        description="The work of my venture into different fields"
      />

      <div className="container mx-auto px-6 py-32">
        <h1 className="text-6xl sm:text-9xl font-extrabold text-stroke text-center">
          Portfolio
        </h1>
        <div className="mt-4 flex flex-wrap justify-center">
          {portfolioItems.map(({ node: item }) => (
            <div key={item.id} className="w-full md:w-1/2 lg:w-1/3 p-1">
              <Img
                className="overflow-hidden rounded-lg"
                fluid={item.image.fluid}
                alt={item.title}
              />
              <h3
                className="mt-2 text-4xl font-bold font-black leading-none text-accents-900"
                style={{ color: item.color }}
              >
                {item.name}
              </h3>
              <span className="inline-block mt-2 rounded-full px-2 bg-accents-700 text-accents-100">
                {item.category}
              </span>
              <p className="mt-4 text-accents-700 leading-relaxed ">
                {item.description.description}
              </p>
              <a
                className="block bg-accents-100 shadow-md mt-4 px-4 py-2 text-center rounded transform transition-all ease-in-out duration-200 hover:translate-y-1"
                href={item.link}
              >
                See it
              </a>
            </div>
          ))}
        </div>
      </div>
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
        }
      }
    }
  }
`;
