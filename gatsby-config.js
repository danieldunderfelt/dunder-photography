const seoConfig = require('./seoConfig')

module.exports = {
  siteMetadata: {
    siteUrl: seoConfig.siteUrl,
    siteUrlShort: seoConfig.siteUrlShort,
    siteTitle: seoConfig.siteTitle,
    siteTitleAlt: seoConfig.siteTitleAlt,
    siteDescription: seoConfig.siteDescription,
    siteLogo: seoConfig.siteLogo,
    siteKeyWords: seoConfig.siteKeyWords,
    favicon: seoConfig.favicon,
    title: seoConfig.siteTitle,
    description: seoConfig.siteDescription,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-catch-links',
    `gatsby-plugin-twitter`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          'Barlow:100,300,400,700,900',
          'Montserrat:100,300,400,700,900',
          'Nunito+Sans:200,300,400,700,900',
          'Nunito:200,300,400,700,900',
          'Overpass:100,300,400,700,900',
          'Oxygen:300,400,700',
          'Raleway:100,200,300,400,700,900',
          'Rubik:300,400,700,900',
          'Work+Sans:100,300,400,700,900',
        ],
      },
    },
    'gatsby-plugin-sass',
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/img`,
        name: 'uploads',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/content`,
        name: 'content',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/img`,
        name: 'images',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-json',
      options: {
        typeName: 'Picture',
      },
    },
    {
      resolve: 'gatsby-plugin-svgr',
      options: {
        include: /icons/,
        svgo: false,
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `#4b72ff`,
        // Disable the loading spinner.
        showSpinner: false,
      },
    },
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    'gatsby-plugin-netlify', // make sure to keep it last in the array
  ],
}
