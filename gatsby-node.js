exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const path = require(`path`)

  // Query project from DatoCms
  const result = await graphql(
    `
      {
        allDatoCmsProject(filter: {meta: {status: {eq: "published"}}}) {
          edges {
            node {
              id
              locale
              name
              customer
              description
              images {
                fluid {
                  width
                  tracedSVG
                  srcSet
                  src
                  base64
                  aspectRatio
                  sizes
                  height
                }
              }
              perimeter
              technologies
              stack
            }
          }
        }
      }
    `
  )

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  // Create pages 
  const template = path.resolve(`src/templates/project.js`)
  result.data.allDatoCmsProject.edges.forEach(({ node }) => {
    const path = `project/${node.name.replace(' ', '-').toLowerCase()}`
    createPage({
      path,
      component: template,
      context: {
        id: node.id,
        pagePath: path,
      },
    })
  })
}

// exports.onCreatePage = async ({ page, actions }) => {
//   const { createPage } = actions

//   // Own routing
//   if (page.path.match(/project\/*/)) {
//     page.matchPath = '/project/*'
//   } else if (page.path === '/') {
//     page.matchPath = '/*'
//   }
//   createPage(page)
// }