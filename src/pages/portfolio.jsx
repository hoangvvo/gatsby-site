import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/layout';
import SEO from '../components/seo';

export default function PortfolioPage({ data }) {
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
            <div key={item.id} className="w-full md:w-1/2 lg:w-1/3 p-4">
              {item.image ? (
                <Img
                  className="overflow-hidden rounded-lg"
                  fluid={item.image.fluid}
                  alt={item.title}
                />
              ) : (
                <img
                  alt="No logo"
                  src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                  className="theme-gradient overflow rounded-lg w-full"
                />
              )}
              <div className="mt-2">
                <span className="inline-block align-middle bg-accents-700 text-accents-100 rounded-full px-2">
                  {item.category}
                </span>{' '}
                <h3
                  className="inline align-middle text-3xl font-bold font-black leading-none text-accents-900"
                  style={{ color: item.color }}
                >
                  {item.name}
                </h3>{' '}
              </div>
              <p className="mt-1 align-middle text-accents-600 text-sm">
                {item.startDate} - {item.isOngoing ? 'present' : item.endDate}
              </p>
              <p className="text-accents-700 leading-relaxed ">
                {item.description.description}
              </p>
              <ul>
                {item.tags.map(tag => (
                  <li
                    key={`tag:${tag}`}
                    className="font-mono inline-block underline-bg theme-gradient opacity-75 text-xs mr-1"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
              <a
                target="_blank"
                rel="noopener noreferrer"
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
}

export const query = graphql`
  query PortfolioQuery {
    allContentfulPortfolio(sort: { fields: [startDate], order: DESC }) {
      edges {
        node {
          id
          name
          isOngoing
          startDate(formatString: "MMM YYYY")
          endDate(formatString: "MMM YYYY")
          description {
            description
          }
          image {
            fluid(maxWidth: 768) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
          category
          tags
          link
        }
      }
    }
  }
`;
