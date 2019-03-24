import React from 'react'
import { kebabCase, get } from 'lodash'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../../components/Layout'
import styles from '../../style/Picture.module.scss'
import Picture from '../../components/Picture'
import SEO from '../../components/SEO'

const TagsPage = ({ data }) => {
  const tags = get(data, 'allPicture.group', [])
  const title = 'Subjects featured on dunder.photography'
  const firstPic = get(tags, '[0].nodes[0].file')

  return (
    <Layout>
      <Helmet title={title} />
      <SEO
        post={{
          title,
          description: 'A list of all distinct subjects I have photographed.',
          image: firstPic,
          slug: `tags`,
        }}
        postSEO={true}
      />
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
