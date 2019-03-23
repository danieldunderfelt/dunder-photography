import React from 'react'
import { kebabCase, get } from 'lodash'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/Layout'
import styles from '../../style/Picture.module.scss'
import config from '../../../seoConfig'
import Picture from '../../components/Picture'

// TODO: Show all tags with the most recent picture

const TagsPage = ({ data }) => {
  const tags = get(data, 'allPicture.group', [])
  console.log(tags)

  return (
    <Layout>
      <Helmet title={`Tags | ${config.siteTitle}`} />
      <div>
        <h3 className={styles.ListHeading}>Subjects</h3>
        <section className={styles.PictureList}>
          {tags.map(({ fieldValue, nodes }) => {
            return (
              <Link to={`/tags/${kebabCase(fieldValue)}/`}>
                <Picture picture={nodes[0]} overlay={fieldValue} />
              </Link>
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
