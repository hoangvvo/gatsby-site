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
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
  ],
};
