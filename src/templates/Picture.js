import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import get from 'lodash/get'
import styles from '../style/Picture.module.scss'
import Picture from '../components/Picture'
import PictureTags from '../components/PictureTags'

class PictureRoute extends React.Component {
  render() {
    const { data } = this.props
    const picture = get(data, 'picture', {})
    const { title, tags, description } = picture

    return (
      <Layout>
        <Helmet>
          <title>{`${title} by Daniel Dunderfelt`}</title>
        </Helmet>
        <div className={styles.PicturePage}>
          <Picture picture={picture} showInfo={false} />
          <div className={styles.PictureInfo}>
            <h2 className={styles.PictureTitle}>{title}</h2>
            <PictureTags tags={tags} />
            <div className={styles.Description}>{description}</div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default PictureRoute

export const picturePageQuery = graphql`
  query AuthorPage($id: String) {
    picture(id: { eq: $id }) {
      title
      file
      alt
      description
      tags
    }
  }
`
