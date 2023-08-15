module.exports = {
  graphqlTypegen: true,
  siteMetadata: {
    siteUrl: 'https://planetagamelabo.com',
    title: 'プラネタゲームラボ',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-127082222-2',
      },
    },
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
    'gatsby-plugin-mdx',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'games',
        path: './contents/games/',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'notifications',
        path: './contents/notifications/',
      },
    },
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-transformer-json',
    'gatsby-transformer-remark',
    'gatsby-plugin-meta-redirect',
    'gatsby-plugin-postcss',
  ],
};
