module.exports = {
  siteMetadata: {
    title: `Gatsby Sydney Ecommerce Theme`,
    siteUrl: `https://jamm.matter.design`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Sydney Ecommerce Theme`,
        short_name: `Sydney`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#ffffff`,
        display: `standalone`,
        icon: 'src/assets/favicon.png',
      },
    },
    'gatsby-plugin-netlify',
    {
      backend: {
        name: 'git-gateway',
        branch: 'master',
      },
      media_folder: 'static/uploads',
      public_folder: '/uploads',
      collections: [
        {
          name: 'products',
          label: 'Products',
          folder: 'content/products',
          create: true,
          fields: [
            { label: 'Title', name: 'title', widget: 'string' },
            { label: 'Description', name: 'description', widget: 'markdown' },
            { label: 'Price', name: 'price', widget: 'number' },
            { label: 'Image', name: 'image', widget: 'image' },
          ],
        },
      ],
    },
  ],
};
