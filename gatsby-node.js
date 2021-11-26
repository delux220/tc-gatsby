const path = require("path")

exports.onCreateWebpackConfig = ({
    actions,
    plugins,
    stage
  }) => {
    actions.setWebpackConfig({
      resolve: {
        alias: {
          path: require.resolve("path-browserify")
        },
        fallback: {
          fs: false,
        }
      }
    })
    if (stage === 'build-javascript' || stage === 'develop') {
      actions.setWebpackConfig({
        plugins: [
          plugins.provide({ process: 'process/browser' })
        ]
      })
    }
  }
exports.createPages = async({graphql, actions}) => {
  /*const { createPage } = actions;

  const aboutTemplate = path.resolve(`src/pages/about.js`)

  createPage({
    path: `/about`,
    component: aboutTemplate
  });*/


};