/* eslint-disable react/prop-types */
import React from 'react';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/layout';
import SEO from '../components/seo';

import My from '../components/my';

const BlogPage = ({ data }) => {
  const blogPosts = data.allContentfulBlogPost.edges;

  return (
    <Layout>
      <SEO title="Blog" description="My name is Hoang Vo. I have been working on various projects to polish my skills in Computer Programming, Graphic Design, Video Production, Photography, Leadership as well as taking part in community activities." />
      <section className="section hv-mt-3">
        <div className="container">
          <h1 className="title hv-section-title hv-animate-text-stroke">Blog</h1>
          <div className="hv-blog-posts hv-mt-3">
            <div className="columns is-multiline">
              {blogPosts.map(({ node: post }) => (
                <div className="hv-blog-post column is-4-tablet is-3-fullhd" key={post.id}>
                  <Link to={`/blog/${post.slug}`}>
                    <div>
                      <figure className="image">
                        <Img fluid={post.image.fluid} alt={post.title} />
                      </figure>
                    </div>
                    <div>
                      <div className="hv-blog-post-head">
                        <div className="hv-blog-post-category">
                          {
                            post.category.map(cate => (<span key={cate.id}>{cate.name}</span>))
                          }
                        </div>
                        <h3 className="hv-blog-post-title">{post.title}</h3>
                      </div>
                      <p className="hv-blog-post-description">{post.description.description}</p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <My />
    </Layout>
  );
};

export default BlogPage;

export const query = graphql`
  query BlogPageQuery {
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          id
          title
          slug
          description {
            description
          }
          image {
            fluid(maxWidth: 480) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
          category {
            id
            name
          }
        }
      }
    }
  }
`;
