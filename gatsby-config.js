module.exports = {
  siteMetadata: {
    title: 'Brian Kuzma'
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography.js',
      },
    },
    'gatsby-plugin-styled-components',
  ],
};
