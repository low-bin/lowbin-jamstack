/**
   * Configure your Gatsby site with this file.
   *
   * See: https://www.gatsbyjs.org/docs/gatsby-config/
   */

 module.exports = {
     /* Your site config here */
     plugins: [
       {
         resolve: 'gatsby-source-graphql',
         options: {
           typeName: 'WPGraphQL',
           fieldName: 'wpgraphql',
            url: 'http://lowbin.pachamama.digital/graphql',

         }
       }
     ]
    }
  

    // Specify the URL of the WordPress source
   