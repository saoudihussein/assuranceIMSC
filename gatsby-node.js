const path = require(`path`)

// Log out information after a build is done
exports.onPostBuild = ({ reporter }) => {
  reporter.info(`Your Gatsby site has been built!`)
}

// Create blog pages dynamically
exports.createPages = async ({ graphql, actions }) => {


  const pages = await graphql(`
        query {
          swapi {
            pages {
              nodes {
                content
                uri
                title
                seo {
                  title
                  metaDesc
                }
              }
            }
          }
        }
        `)

  pages.data.swapi.pages.nodes.forEach(page => {
    actions.createPage({
      path: `${'service' + page.uri}`,
      component: path.resolve(`./src/pages/service/template-assurance.js`),
      context: {
        ...page,
        content: page.content,
        title: page.title,
        titleMeta: page.seo.title,
        metaDesc: page.seo.metaDesc
      },
    })
  })



  const blogs = await graphql(`
        query {
          swapi {
            posts (last: 30) {
              nodes {
                content
                title
                uri
                excerpt
                seo {
                  title
                  metaDesc
                }
                featuredImage {
                  link
                }
              }
            }
          }
        }
        `)

  blogs.data.swapi.posts.nodes.forEach(blog => {
    actions.createPage({
      path: `${blog.uri}`,
      component: path.resolve(`./src/components/blog-single.js`),
      context: {
        ...blog,
        content: blog.content,
        title: blog.title,
        excerpt: blog.excerpt,
        titleMeta: blog.seo.title,
        metaDesc: blog.seo.metaDesc
      },
    })
  })


  for (i = 1; i < ((blogs.data.swapi.posts.nodes.length) / 3); i++) {
    actions.createPage({
      path: `${"blog/page/" + (i + 1)}`,
      component: path.resolve(`./src/components/blog-template.js`),
      context: {
        ...blogs.data.swapi.posts.nodes[i],
        data: blogs.data.swapi.posts,
        indice: (i * 3)
      },
    })
  }


  const blogsPri = await graphql(`
        query {
          swapi {
            posts {
              nodes {
                content
                title
                uri
                excerpt
                featuredImage {
                  link
                }
              }
            }
          }
        }
        `)

  for (i = 1; i < (blogsPri.data.swapi.posts.nodes.length / 6) + 1; i++) {
    actions.createPage({
      path: `${"blog/"}`,
      component: path.resolve(`./src/components/blog-template-empty.js`),
      context: {
        ...blogsPri.data.swapi.posts.nodes[i],
        data: blogsPri.data.swapi.posts,
        indice: (i * 6) - 6
      },
    })
  }
}