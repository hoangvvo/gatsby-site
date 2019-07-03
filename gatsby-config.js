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
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.hoangvvo.com',
        sitemap: 'https://www.hoangvvo.com/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: 'https://www.hoangvvo.com',
        stripQueryString: true,
      },
    },
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
              maxWidth: 800,
              quality: 80,
              withWebp: true,
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
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: 'rgbpfpd0hrww',
        accessToken: 'ruHAzGZCjaSmZMK9LSMHiI_TvNrGWoAIrgIwAszRxLQ',
      },
    },
  ],
};
