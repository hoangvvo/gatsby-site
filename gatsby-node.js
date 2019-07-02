const path = require('path');
const slash = require('slash');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return graphql(
    `
      {
        allContentfulBlogPost {
          edges {
            node {
              id
              slug
            }
          }
        }
      }
    `,
  ).then((result) => {
    if (result.errors) {
      throw new Error(result.errors);
    }
    const blogPostTemplate = path.resolve('./src/templates/post.jsx');

    result.data.allContentfulBlogPost.edges.forEach((edge) => {
      createPage({
        path: `/blog/${edge.node.slug}/`,
        component: slash(blogPostTemplate),
        context: {
          slug: edge.node.slug,
          id: edge.node.id,
        },
      });
    });
  })
    .catch((error) => {
      throw new Error(error);
    });
};
