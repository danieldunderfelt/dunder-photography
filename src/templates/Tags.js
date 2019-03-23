import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import styles from '../style/Picture.module.scss'
import get from 'lodash/get'
import PictureIndex from '../components/PictureIndex'
import config from '../../seoConfig'

const TagRoute = ({ data, pageContext }) => {
  let pictures = get(data, 'allPicture.edges', [])
  const tag = pageContext.tag

  return (
    <Layout>
      <Helmet>
        <title>{`Tagged with ${tag} | ${config.siteTitle}`}</title>
      </Helmet>
      <div>
        <h3 className={styles.ListHeading}>
          <strong className={styles.HeadingTag}>{tag}</strong>
        </h3>
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
      sort: { fields: [tags], order: DESC }
      filter: { tags: { in: [$tag] } }
    ) {
      edges {
        node {
          title
          file
          alt
          description
          tags
        }
      }
    }
  }
`
