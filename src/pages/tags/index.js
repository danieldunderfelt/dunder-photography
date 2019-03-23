import React from 'react'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/Layout'
import styles from '../../style/Picture.module.scss'
import config from '../../../seoConfig'

// TODO: Show all tags with the most recent picture

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
  },
}) => (
  <Layout>
    <Helmet title={`Tags | ${config.siteTitle}`} />
    <div>
      <h3 className={styles.ListHeading}>Subjects</h3>
      <ul className={styles.TagList}>
        {group.map(tag => (
          <li key={tag.fieldValue}>
            <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
              <strong className={styles.TagListTag}>{tag.fieldValue}</strong>
              <span className={styles.TagListCount}>{tag.totalCount}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </Layout>
)

export default TagsPage

export const tagPageQuery = graphql`
  query TagsQuery {
    allPicture(limit: 1000) {
      group(field: tags) {
        fieldValue
        totalCount
      }
    }
  }
`
