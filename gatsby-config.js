module.exports = {
  siteMetadata: {
    title: `Oliver Dumoulin`,
    description: `A product designer and developer currently working on design systems at Aaptiv in NYC.`,
    author: `@odmln`,
    url: "https://www.odmln.com",
    image: "/images/profile.jpg",
    twitterUsername: "@odmln",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        trackingId: `UA-127725448-1`,
        head: false,
        anonymize: true,
      },
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-127725448-1",
        head: false,
        anonymize: true,
      },
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `static`,
        path: `${__dirname}/src/images/`,
      },
    },
  ],
}
