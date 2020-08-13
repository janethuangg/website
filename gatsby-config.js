module.exports = {
  siteMetadata: {
    title: `Janet Huang`,
    // description: `Kick off your next, great Gatsby project with this default portfolio starter.`,
    author: `Janet Huang`,
    stacks: [
      "React",
      "GraphQL",
      "Gatsby",
      "Javascript",
      "Redux",
      "Styled-components",
      "Node",
      "MongoDB",
    ],
    social: {
      twitter: `judionit`,
      github: `janethuangg`,
    },
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
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo.svg`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
