require("dotenv").config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    title: `beve.dev website`,
    description: `Christophe Beveraggi's personal website.`,
    author: `@beve`,
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
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `beve.dev`,
        short_name: `beve.dev`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#f54235`,
        display: `minimal-ui`,
        icon: `src/images/beve-icon.png`,
      },
    },
    {
		resolve: `gatsby-source-datocms`,
		options: {
		  apiToken: process.env.DATOCMS_API_TOKEN,
		  preview: false,
		  disableLiveReload: false,
		},
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
