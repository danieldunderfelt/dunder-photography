import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import get from 'lodash/get'
import styles from '../style/Picture.module.scss'
import Picture from '../components/Picture'

class PictureRoute extends React.Component {
  render() {
    const { data } = this.props
    const picture = get(data, 'picture', {})
    const { title } = picture

    return (
      <Layout>
        <Helmet>
          <title>{`${title} by Daniel Dunderfelt`}</title>
        </Helmet>
        <div className={styles.PicturePage}>
          <Picture picture={picture} />
        </div>
      </Layout>
    )
  }
}

export default PictureRoute

export const picturePageQuery = graphql`
  query AuthorPage($title: String) {
    picture(title: { eq: $title }) {
      title
      file
      alt
      description
      tags
    }
  }
`
