import React from 'react'
import styles from '../style/Picture.module.scss'
import Picture from './Picture'
import { kebabCase } from 'lodash'

const PictureIndex = ({ pictures }) => {
  return (
    <section className={styles.PictureList}>
      {pictures.map(({ node }) => (
        <Picture
          key={`pic_link_${kebabCase(node.title)}`}
          linkTo={`/pic/${kebabCase(node.title)}/`}
          picture={node}
        />
      ))}
    </section>
  )
}

export default PictureIndex
