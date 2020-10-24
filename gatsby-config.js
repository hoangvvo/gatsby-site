require('dotenv').config();

module.exports = {
  siteMetadata: {
    siteUrl: 'https://old.hoangvvo.com',
    title: 'Hoang Vo',
    description:
      'Computer programmer, graphic desiger, photographer, and a good friend.',
    author: '@hoangvvo',
    twitter: {
      username: 'hoangvvo',
    },
    github: {
      username: 'hoangvvo',
    },
    linkedin: {
      username: 'hoangvvo',
    },
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/assets/images`,
      },
    },
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: 'https://hoangvvo.com/',
        stripQueryString: true,
      },
    },
    'gatsby-plugin-robots-txt',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'hoangvvo-gatsby-site',
        short_name: 'hoangvvo',
        start_url: '/',
        background_color: '#ffc107',
        display: 'minimal-ui',
        theme_color: '#ffc107',
        icon: 'src/assets/images/icon.png',
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images-contentful',
            options: {
              maxWidth: 768,
              withWebp: true,
            },
          },
          'gatsby-remark-autolink-headers',
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              showLineNumbers: true,
            },
          },
          'gatsby-remark-external-links',
        ],
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-postcss',
    'gatsby-plugin-no-sourcemaps',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    'gatsby-plugin-remove-trailing-slashes',
    // {
    //   resolve: 'gatsby-plugin-fathom',
    //   options: {
    //     siteId: process.env.FATHOM_SITE_ID,
    //   },
    // },
  ],
};
