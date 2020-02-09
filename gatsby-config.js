module.exports = {
  siteMetadata: {
    title: "Nashville Table Tennis Club",
    author: "Michael Smith",
    description: "Home page for Nashville Table Tennis Club"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Nashville Table Tennis Club',
        short_name: 'NTTC',
        start_url: '/',
        background_color: '#FFFFFF',
        theme_color: '#FFFFFF',
        display: 'minimal-ui',
        icon: 'src/assets/images/banner_small.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-transformer-yaml',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: './src/data/'
      }
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `x7cpzmb2w4w3`,
        accessToken: `CGMxGpOq2tSmM83-yld-5GyjsPNbL1a96c_4Aw9HWEg`
      }
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-netlify-cms'
  ],
}
