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
    'gatsby-plugin-offline'
  ],
}
