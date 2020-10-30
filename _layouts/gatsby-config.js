const path = require('path')

module.exports = {
  pathPrefix: `/foam-gatsby-template`,
  siteMetadata: {
    title: `Foam`,
  },
  plugins: [
    {
      resolve: `gatsby-theme-garden`,
      options: {
        rootNote: '/readme',
        contentPath: `${__dirname}/..`,
        mdxOtherwiseConfigured: true,
        ignore: [
          '**/_layouts/**',
          '**/.git/**',
          '**/.github/**',
          '**/.vscode/**',
        ],
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-remark-images`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.md`, `.mdx`],
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-double-brackets-link',
            options: {
              titleToURLPath: path.join(__dirname, './helpers/title-to-url.js'),
            },
          },
          'gatsby-remark-double-parenthesis-link',
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 561,
            },
          },
          `gatsby-remark-copy-linked-files`,
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              icon: false,
            },
          },
        ],
      },
    },
  ],
}
