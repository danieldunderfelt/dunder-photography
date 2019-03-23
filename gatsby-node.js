const _ = require('lodash')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
    query createPagesQuery {
      allPicture {
        edges {
          node {
            id
            title
            file
            alt
            description
            tags
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    const posts = result.data.allPicture.edges

    posts.forEach(({ node }) => {
      const id = node.id
      const picPath = `/pic/${_.kebabCase(node.title)}/`

      createPage({
        path: picPath,
        component: path.resolve(`src/templates/Picture.js`),
        // additional data can be passed via context
        context: {
          id,
        },
      })
    })

    // Tag pages:
    let tags = []
    // Iterate through each post, putting all found tags into `tags`
    posts.forEach(edge => {
      if (_.get(edge, `node.tags`)) {
        tags = tags.concat(edge.node.tags)
      }
    })
    // Eliminate duplicate tags
    tags = _.uniq(tags)

    // Make tag pages
    tags.forEach(tag => {
      const tagPath = `/tags/${_.kebabCase(tag)}/`

      createPage({
        path: tagPath,
        component: path.resolve(`src/templates/Tags.js`),
        context: {
          tag,
        },
      })
    })
  })
}
