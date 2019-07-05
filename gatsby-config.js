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
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/content`,
        name: 'content'
      }
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "cancellations",
        fieldName: "cancellations",
        url: `${__dirname}/static/content/cancellations.md`
      }
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-netlify-cms'
  ],
}
