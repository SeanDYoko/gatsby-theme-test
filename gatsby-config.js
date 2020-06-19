const path = require("path");

module.exports = (themeOptions) => {
  return {
    siteMetadata: {
      title: `test`,
      description: ``,
      author: `@seanyoko2`,
    },
    plugins: [
      `gatsby-plugin-react-helmet`,
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `images`,
          path: `src/images`,
        },
      },
      `gatsby-transformer-sharp`,
      `gatsby-plugin-sharp`,
      {
        resolve: `gatsby-plugin-manifest`,
        options: {
          name: `test`,
          short_name: `starter`,
          start_url: `/`,
          background_color: `#663399`,
          theme_color: `#663399`,
          display: `minimal-ui`,
          icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
        },
      },
      {
        resolve: "@kentico/gatsby-source-kontent",
        options: {
          projectId: themeOptions.projectId, // Fill in your Project ID
          languageCodenames: [
            "default", // Languages in your project (Project settings -> Localization),
          ],
        },
      },
      {
        resolve: `@rshackleton/gatsby-transformer-kontent-image`,
        options: {},
      },
      `gatsby-plugin-sass`,
      {
        resolve: `gatsby-plugin-styled-components`,
        options: {
          // Add any options here
        },
      },
      {
        resolve: `gatsby-plugin-google-fonts`,
        options: {
          fonts: [
            `Open Sans\:400,700,800`, // you can also specify font weights and styles
          ],
          display: "swap",
        },
      },
    ],
  };
};
