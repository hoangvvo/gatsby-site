import React from 'react';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/layout';
import SEO from '../components/seo';

const BlogPage = ({ data }) => {
  const blogPosts = data.allContentfulBlogPost.edges;

  return (
    <Layout>
      <SEO
        title="Blog"
        description="My name is Hoang Vo. I have been working on various projects to polish my skills in Computer Programming, Graphic Design, Video Production, Photography, Leadership as well as taking part in community activities."
      />
      <div className="container mx-auto px-2 py-32">
        <h1 className="text-9xl font-extrabold text-stroke text-center">
          Blog
        </h1>
        <div className="mt-4 flex flex-wrap justify-center">
          {blogPosts.map(({ node: post }) => (
            <div className="w-full md:w-1/2 lg:w-1/3 p-1" key={post.id}>
              <Link to={`/blog/${post.slug}/`}>
                <div className="shadow-md bg-accents-100 hover:shadow-lg transform hover:translate-y-2 transition-all ease-in-out duration-300 m-2 rounded-lg overflow-hidden">
                  <div className="relative h-0 pb-9/16 overflow-hidden">
                    <Img
                      className="w-full h-full inset-0 object-cover"
                      fluid={post.image.fluid}
                      alt={post.title}
                      style={{ position: 'absolute' }}
                    />
                  </div>
                  <div className="p-2">
                    <div>
                      {post.category.map(cate => (
                        <span
                          className="rounded-full text-xs p-1 bg-accents-700 text-accents-100"
                          key={cate.id}
                        >
                          {cate.name}
                        </span>
                      ))}
                      <h3 className="inline ml-1 font-bold">{post.title}</h3>
                    </div>
                    <p className="text-sm mt-1 text-accents-700">
                      {post.description.description}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
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
            fluid(maxWidth: 768) {
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
