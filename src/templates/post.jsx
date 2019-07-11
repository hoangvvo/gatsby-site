/* eslint-disable react/prop-types */
import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/layout';
import SEO from '../components/seo';

const PostTemplate = ({ data }) => {
  const {
    title,
    content,
    image,
    description,
    author,
    publishDate,
    category,
  } = data.contentfulBlogPost;
  return (
    <Layout>
      <SEO
        title={title}
        description={description.description}
        type="article"
        image={image.file.url}
      />
      <article>
        <header className="hv-post-header">
          <Img className="hv-post-image" alt={title} fluid={image.fluid} />
          <div className="hv-post-head">
            <div className="container">
              <div className="hv-post-category">
                {category.map(cate => (
                  <span key={cate.id}>{cate.name}</span>
                ))}
              </div>
              <h1 className="title hv-post-title">{title}</h1>
              <div className="hv-post-meta">
                <div>
                  <figure className="image is-48x48 is-inline-block">
                    <a
                      href={author[0].link}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <img
                        className="is-rounded"
                        src={`${author[0].image.file.url}?w=128`}
                        alt={author[0].name}
                      />
                    </a>
                  </figure>
                </div>
                <div className="hv-post-meta-detail">
                  <div>
                    <a
                      href={author[0].link}
                      className="hv-post-author"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      {author[0].name}
                    </a>
                  </div>
                  <div>
                    <span className="hv-post-date">{publishDate}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <section className="section hv-post-content">
          <div className="container">
            <div className="columns is-centered">
              <div className="column is-8">
                <div
                  className="content"
                  dangerouslySetInnerHTML={{
                    __html: content.childMarkdownRemark.html,
                  }}
                />
              </div>
            </div>
          </div>
        </section>
      </article>
    </Layout>
  );
};

export default PostTemplate;

export const pageQuery = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      id
      title
      publishDate(formatString: "MMMM Do, YYYY")
      slug
      description {
        description
      }
      content {
        childMarkdownRemark {
          html
        }
      }
      image {
        file {
          url
        }
        fluid(maxWidth: 1280) {
          ...GatsbyContentfulFluid_withWebp
        }
      }
      author {
        name
        link
        image {
          file {
            url
          }
        }
      }
      category {
        id
        name
      }
    }
  }
`;
