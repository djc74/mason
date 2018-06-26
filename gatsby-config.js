module.exports = {
  siteMetadata: {
    title: 'The Mason Clinic'
  },
  pathPrefix: '/masonclinic.github.io',
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'img',
        path: `${__dirname}/src/images`
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp'
  ]
};

