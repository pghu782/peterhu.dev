module.exports = {
  siteMetadata: {
    title: `Peter G. Hu`,
    description: `Peter's Portfolio Site V2`,
    author: `@peterh782`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/profile_square.jpg`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`,
  ],
}
