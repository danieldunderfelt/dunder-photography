import React from 'react'
import { kebabCase, get } from 'lodash'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/Layout'
import styles from '../../style/Picture.module.scss'
import config from '../../../seoConfig'
import Picture from '../../components/Picture'

const TagsPage = ({ data }) => {
  const tags = get(data, 'allPicture.group', [])

  return (
    <Layout>
      <Helmet title={`Tags | ${config.siteTitle}`} />
      <div>
        <h3 className={styles.ListHeading}>Subjects</h3>
        <section className={styles.PictureList}>
          {tags.map(({ fieldValue, nodes }) => {
            return (
              <Picture
                key={`tag_picture_${fieldValue}`}
                linkTo={`/tags/${kebabCase(fieldValue)}/`}
                picture={nodes[0]}
                overlay={fieldValue}
              />
            )
          })}
        </section>
      </div>
    </Layout>
  )
}

export default TagsPage

export const tagPageQuery = graphql`
  query TagsQuery {
    allPicture(limit: 1000, sort: { fields: [timestamp], order: DESC }) {
      group(field: tags) {
        fieldValue
        nodes {
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
