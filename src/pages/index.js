import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/Layout'
import PictureIndex from '../components/PictureIndex'
import SEO from '../components/SEO'
import config from '../../seoConfig'
import { get } from 'lodash'

const IndexPage = ({ data }) => {
  let pictures = get(data, 'allPicture.edges', [])

  return (
    <Layout>
      <Helmet title={config.siteTitle} />
      <SEO />
      <PictureIndex pictures={pictures} />
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
    allPicture(sort: { fields: [timestamp], order: DESC }) {
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
