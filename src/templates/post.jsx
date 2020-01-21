import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/layout';
import SEO from '../components/seo';

const PostTemplate = ({ data }) => {
  const { title, content, image, description } = data.contentfulBlogPost;
  return (
    <Layout>
      <SEO
        title={title}
        description={description.description}
        type="article"
        image={image.file.url}
      />
      <article className="px-6 py-32">
        <header className="mx-auto max-w-2xl leading-relaxed">
          <h1 className="text-3xl">{title}</h1>
          <p className="py-3 text-accents-600">{description.description}</p>
          <Img
            className="object-cover w-full rounded-lg"
            alt={title}
            fluid={image.fluid}
          />
        </header>
        <section className="mx-auto mx-auto max-w-2xl leading-loose py-4 my-2 content">
          <div
            dangerouslySetInnerHTML={{
              __html: content.childMarkdownRemark.html,
            }}
          />
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
