import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import styles from '../style/Picture.module.scss'
import PictureIndex from '../components/PictureIndex'
import SEO from '../components/SEO'
import { kebabCase, get } from 'lodash'

const TagRoute = ({ data, pageContext }) => {
  let pictures = get(data, 'allPicture.edges', [])
  const tag = pageContext.tag
  const title = `${tag} on dunder.photography`
  const firstPic = get(pictures, '[0].node.file')

  return (
    <Layout>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <SEO
        post={{
          title,
          description: `Photos of subject: ${tag}`,
          image: firstPic,
          slug: `tags/${kebabCase(tag)}`,
        }}
        postSEO={true}
      />
      <div>
        <h3 className={styles.ListHeading}>{tag}</h3>
        <PictureIndex pictures={pictures} />
      </div>
    </Layout>
  )
}

export default TagRoute

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
    allPicture(
      limit: 1000
      sort: { fields: [timestamp], order: DESC }
      filter: { tags: { in: [$tag] } }
    ) {
      edges {
        node {
          title
          timestamp
          file
          alt
          description
          tags
        }
      }
    }
  }
`
