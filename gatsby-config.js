require('dotenv').config();

module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.hoangvvo.com',
    title: 'Hoang Vo',
    description: 'Hoang is a curious learner, a practical thinker, a tech-savvy person, and a good friend. He is willing to meet you!',
    author: '@hoangvvo',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: 'https://www.hoangvvo.com/',
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
        icon: 'src/images/icon.png',
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
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        // Setting a color is optional.
        color: '#ffc107',
        // Disable the loading spinner.
        showSpinner: false,
      },
    },
    'gatsby-plugin-no-sourcemaps',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
  ],
};
